import { Link } from "react-router-dom"
import Logo from "../../components/Logo"

function ForgotPassword() {
    
    return (
        <div className="page-wrapper login-pagewrapper">
            <main id="page-main">
                <div className="login-wrapper d-flex justify-content-center align-items-center flex-column">
                    <div className="forgot-container signup-container">
                        <Logo />
                        <div className="form_info">
                            <div className="key_icon">
                                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.0001 1.66666L24.3335 4.33332M14.1868 14.48L19.6668 8.99999M19.6668 8.99999L23.6668 13L28.3335 8.33332L24.3335 4.33332M19.6668 8.99999L24.3335 4.33332M14.1868 14.48C14.8752 15.1593 15.4225 15.968 15.7971 16.8597C16.1717 17.7514 16.3663 18.7083 16.3695 19.6755C16.3727 20.6427 16.1846 21.6009 15.816 22.4951C15.4474 23.3892 14.9055 24.2016 14.2216 24.8855C13.5378 25.5694 12.7254 26.1113 11.8312 26.4799C10.937 26.8485 9.97879 27.0366 9.01163 27.0334C8.04448 27.0301 7.08751 26.8356 6.19584 26.461C5.30417 26.0864 4.49541 25.5391 3.81612 24.8507C2.4803 23.4676 1.74114 21.6152 1.75785 19.6924C1.77455 17.7696 2.54579 15.9303 3.90545 14.5707C5.26511 13.211 7.1044 12.4398 9.02718 12.423C10.95 12.4063 12.8024 13.1455 14.1855 14.4813L14.1868 14.48Z" stroke="#856ECE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="form_title">Forget password?</p>
                            <span className="frgtpsw_txt">No worries, we’ll send you reset instructions.</span>
                        </div>
                        <form name="signup" className="sign-up">
                            <div className="form-control">
                                <input type="email" name="email" className="form-input" placeholder="none" required />
                                <label for="email" className="form-label">Email address</label>
                            </div>
                            <div className="form-action">
                                <button type="submit" className="form-btn sign-btn">Reset Password</button>
                            </div>
                        </form>
                        <div className="action-text">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0834 7H2.91675" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.00008 11.0833L2.91675 7L7.00008 2.91667" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> <span>Back to <Link to="/login"> Login </Link></span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default ForgotPassword