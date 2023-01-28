import { Route, Routes } from 'react-router-dom'
import Login from '../view/login/Index'
import Verification from '../view/verification/Index'
import ForgotPassword from '../view/forgotPassword/Index'
import ChangePassword from '../view/changePassword/Index'
import { useSelector, useDispatch } from "react-redux";
import PrivateRoutes from './PrivateRoutes'
import AuthRoutes from './AuthRoutes'


export default function MainRoutes() {
    const token = useSelector((state) => state.user.userToken);

    return (
        token ?
            <PrivateRoutes />
            :
            <AuthRoutes />
    )
}