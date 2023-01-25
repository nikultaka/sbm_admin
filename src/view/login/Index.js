import Login from "./login"
import '../../assets/css/signup.css'
import { useSelector, useDispatch } from "react-redux";
import {
    setToken,
    setLoading,
    setUserDetails,
} from "../../redux/user/user.action";
import { validateAll } from "indicative/validator";
import { Messages } from "../../common/msg"
import React, { useState } from "react";
import ApiCall from "../../Api/index"
import ToastAlert from "../../common/ToastAlert";
import { useNavigate } from "react-router-dom";

function Index() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        error: {},
    });

    const { email, password, error } = formData;

    const handleForm = (e) => {

        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const submitForm = async () => {

        const rules = {
            email: "required|email",
            password: "required",
        };

        const message = {
            "email.required": "Email " + Messages.IS_REQUIRED,
            "email.email": "Email " + Messages.IS_INVALID,
            "password.required": "Password " + Messages.IS_REQUIRED,
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
                    password: password,
                    device_id: '454545',
                    platform: 3
                }
                const login = await ApiCall('messagecenter/login', 'post', payload);
                if (login.error) {
                    dispatch(setLoading(false))
                    ToastAlert({ title: "Login", msg: login?.error?.response?.data?.MESSAGE || login.error.message, msgType: "error" })
                } else {
                    dispatch(setLoading(false))
                    dispatch(setUserDetails(login?.data?.RESULT))
                    dispatch(setToken(login?.data?.RESULT.accessToken))
                    ToastAlert({ title: "Login", msg: login?.data?.MESSAGE, msgType: "success" })
                    navigate('/')

                }
            })
            .catch((errors) => {
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
    };



    return (

        <Login formData={formData} handleForm={handleForm} submitForm={submitForm} />
    )

}
export default Index