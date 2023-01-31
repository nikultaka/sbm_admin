import { Route, Routes } from 'react-router-dom'
import Login from '../view/login/Index'
import Verification from '../view/verification/Index'
import ForgotPassword from '../view/forgotPassword/Index'
import ChangePassword from '../view/changePassword/Index'
import PasswordSent from '../view/passwordsent/Index'

export default function AuthRoutes() {


    

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/password-sent" element={<PasswordSent />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}