import ChangePassword from "./ChangePassword";
import '../../assets/css/signup.css'
import '../../assets/css/forgotpsw.css'
import '../../assets/css/verification.css'

import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Messages } from "../../common/msg"
import { validateAll } from "indicative/validator";
import { useNavigate } from "react-router-dom";
import {
    setLoading
} from "../../redux/user/user.action";
import ToastAlert from "../../common/ToastAlert";
import ApiCall from "../../Api/index"

function Index() {

    const email = useSelector((state) => state.user.forgotEmail);
    const [forgotEmail, setForgotEmail] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        setForgotEmail(email);
    }, [email])

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
        error: {},
        forgot_error: '',
        input_type : true,
        input_type_confirm: true
    });
    const { password,confirmPassword, error } = formData;

    const handleForm = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const updatePassword = () => {
        const rules = {
            password: "required",
            confirmPassword : "required|same:password"
        };

        const message = {
            "password.required": "Password " + Messages.IS_REQUIRED,
            "confirmPassword.required": "Confirm Password " + Messages.IS_REQUIRED,
            "confirmPassword.same": "Confirm Password must be same as password",
        };

        validateAll(formData, rules, message)
            .then(async () => {
                setFormData({
                    ...formData,
                    error: {},
                });
                dispatch(setLoading(true))
                const payload = {
                    email: email,
                    password : password
                }
                console.log(payload);
                const login = await ApiCall('v1/change-password-web', 'post', payload);
                if (login.error) {
                    dispatch(setLoading(false))
                    console.log(login?.error?.response?.data?.MESSAGE || login.error.message);
                    setFormData({
                        ...formData,
                        forgot_error: login?.error?.response?.data?.MESSAGE || login.error.message,
                    });
                } else {
                    dispatch(setLoading(false))
                    setFormData({
                        ...formData,
                        forgot_error: '',
                        input_type: 'password',
                        input_type_confirm : 'password'
                    });
                    ToastAlert({ title: "Set Password", msg: login?.data?.MESSAGE, msgType: "success" })
                    navigate('/login')
                }
            })
            .catch((errors) => {
                const formaerrror = {};
                if (errors.length) {
                    errors.forEach(function (value) {
                        formaerrror[value.field] = value.message;
                    });
                } else {
                    ToastAlert({ title: "Set Password", msg: Messages.SOMETHING_WENT_WRONG, msgType: "error" })
                }
                setFormData({
                    ...formData,
                    error: formaerrror,
                });
            });
    }

    const showPassword = async () => {
        setFormData({
            ...formData,
            input_type: !formData.input_type,
        });
    }

    const showPasswordConfirm = async () => {
        setFormData({
            ...formData,
            input_type_confirm : !formData.input_type_confirm,
        });
    }

    return (
        <ChangePassword updatePassword={updatePassword} handleForm={handleForm} formData={formData} showPassword={showPassword} showPasswordConfirm={showPasswordConfirm} />
    )
}
export default Index