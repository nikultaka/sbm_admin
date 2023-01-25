import { Link } from "react-router-dom"
import Logo from "../../components/Logo"

function Login({ formData, handleForm, submitForm, showPassword }) {
    return (
        <div className="page-wrapper signup-pagewrapper">
            <main id="page-main">
                <div className="login-wrapper">
                    <div className="login-container signup-container">
                        <Logo />
                        <p className="form_title">Sign In</p>
                        <form name="signup" className="sign-up">
                            <div className="form-control">
                                <input type="email" name="email" id='email' value={formData.email} onChange={handleForm} className="form-input" placeholder="none" />
                                <label htmlFor="email" className="form-label">Email Address</label>
                                {formData.error && formData.error.email && <span className="error-msg">{formData.error.email}</span>}
                            </div>
                            <div className="form-control">
                                <input type={formData.input_type} name="password" id='password' value={formData.password} onChange={handleForm} className="form-input" placeholder="none" />
                                <label htmlFor="password" className="form-label">Password</label>
                                <span className="psw-icon" onClick={showPassword}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9834 10C12.9834 11.65 11.6501 12.9833 10.0001 12.9833C8.35006 12.9833 7.01672 11.65 7.01672 10C7.01672 8.35 8.35006 7.01667 10.0001 7.01667C11.6501 7.01667 12.9834 8.35 12.9834 10Z" stroke="#201D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.99999 16.8917C12.9417 16.8917 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00833 17.5917 7.83333C15.6833 4.83333 12.9417 3.1 9.99999 3.1C7.05833 3.1 4.31666 4.83333 2.40833 7.83333C1.65833 9.00833 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8917 9.99999 16.8917Z" stroke="#201D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span>
                                {formData.error && formData.error.password && <span className="error-msg">{formData.error.password}</span>}
                                { formData.login_error && <>
                                    <img className="error-msg-icon" src="../assets/images/Subtract.png" />
                                    <span className="error-msg">{formData.login_error}</span>
                                    </>
                                }
                            </div>
                            <div className="form-action">
                                <button type="button" className="form-btn sign-btn" onClick={submitForm}>Sign In</button>
                            </div>
                        </form>
                        <div className="action-text">
                            <span>I forget my credentials. <Link to="/forgot-password"> Reset Password</Link> </span>
                        </div>
                    </div>
                </div>

            </main >
        </div>

    )

}
export default Login