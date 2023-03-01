import ForgotPassword from "./ForgotPassword";
import '../../assets/css/signup.css'
import '../../assets/css/forgotpsw.css'
import React, { useState } from "react";
import { validateAll } from "indicative/validator";
import { Messages } from "../../common/msg"
import { useSelector, useDispatch } from "react-redux";
import ApiCall from "../../Api/index"
import ToastAlert from "../../common/ToastAlert";
import { useNavigate } from "react-router-dom";
import {
    setToken,
    setLoading,
    setUserDetails,
    setForgotPasswordEmail,
    setChangePasswordToken,
} from "../../redux/user/user.action";

function Index() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        email: "",
        error: {},
        forgot_error : '',
    });
    const { email, error } = formData;

    const handleForm = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const sendEmail = async() => {
        const rules = {
            email: "required|email"
        };

        const message = {
            "email.required": "Email " + Messages.IS_REQUIRED,
            "email.email": "Email " + Messages.IS_INVALID,
        };

        validateAll(formData, rules, message)
            .then(async () => {
                setFormData({
                    ...formData,
                    error: {},
                });
                dispatch(setLoading(true))
                const payload = {
                    email: email
                }
                const login = await ApiCall('v1/send-email-otp-web', 'post', payload);
                if (login.error) {
                    dispatch(setLoading(false))
                    console.log(login?.error?.response?.data?.MESSAGE || login.error.message);
                    setFormData({
                        ...formData,
                        forgot_error: login?.error?.response?.data?.MESSAGE || login.error.message,
                    });
                } else {
                    dispatch(setLoading(false))
                    dispatch(setForgotPasswordEmail(email))
                    setFormData({
                        ...formData,
                        forgot_error : ''
                    });
                    ToastAlert({ title: "Forgot Password", msg: login?.data?.MESSAGE, msgType: "success" })
                    navigate('/verification')

                }
            })
            .catch((errors) => {
                dispatch(setLoading(false))
                const formaerrror = {};
                if (errors.length) {
                    errors.forEach(function (value) {
                        formaerrror[value.field] = value.message;
                    });
                } else {
                    ToastAlert({ title: "Login", msg: Messages.SOMETHING_WENT_WRONG, msgType: "error" })
                }

                setFormData({
                    ...formData,
                    error: formaerrror,
                });
            });
    }

    return (
        <ForgotPassword sendEmail={sendEmail} handleForm={handleForm} formData={formData} />
    )
}
export default Index