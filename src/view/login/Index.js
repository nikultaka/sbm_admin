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

function Index() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

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
                // dispatch(setToken('sdhgasidhuoashdu'))
            })
            .catch((errors) => {
                const formaerrror = {};
                if (errors.length) {
                    errors.forEach(function (value) {
                        formaerrror[value.field] = value.message;
                    });
                } else {

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