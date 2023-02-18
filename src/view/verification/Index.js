import Verification from "./Verification";
import '../../assets/css/verification.css'
import '../../assets/css/signup.css'
import '../../assets/css/forgotpsw.css'
import { useSelector, useDispatch } from "react-redux";
import React, { useState,useEffect } from "react";
import { Messages } from "../../common/msg"
import { validateAll } from "indicative/validator";
import { useNavigate } from "react-router-dom";
import {
    setToken,
    setLoading,
    setUserDetails,
    setForgotPasswordEmail
} from "../../redux/user/user.action";
import ToastAlert from "../../common/ToastAlert";
import ApiCall from "../../Api/index"

function Index() {

    const email = useSelector((state) => state.user.forgotEmail);
    const [forgotEmail,setForgotEmail] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        setForgotEmail(email);
    }, [email])

    const [formData, setFormData] = useState({
        code: "",
        error: {},
        forgot_error : '',
    });
    const { code, error } = formData;

    const handleForm = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    

    const checkVerification = () => {
        const rules = {
            code: "required"
        };

        const message = {
            "code.required": "Code " + Messages.IS_REQUIRED,
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
                    otp : code
                }
                console.log(payload);
                const login = await ApiCall('v1/verify-email-otp-web', 'post', payload);
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
                        forgot_error : ''
                    });
                    ToastAlert({ title: "Verification Code", msg: login?.data?.MESSAGE, msgType: "success" })
                    navigate('/change-password')
                }
            })
            .catch((errors) => {
                const formaerrror = {};
                if (errors.length) {
                    errors.forEach(function (value) {
                        formaerrror[value.field] = value.message;
                    });
                } else {
                    ToastAlert({ title: "Verification Code", msg: Messages.SOMETHING_WENT_WRONG, msgType: "error" })
                }

                setFormData({
                    ...formData,
                    error: formaerrror,
                });
            });
    }

    return (
        <Verification checkVerification={checkVerification} email={forgotEmail} handleForm={handleForm} formData={formData} /> 
    )
}
export default Index