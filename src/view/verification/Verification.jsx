import { Link } from "react-router-dom"
import Logo from "../../components/Logo"


function Verification({checkVerification,email,handleForm,formData}) {
    return (
        <div className="page-wrapper login-pagewrapper">
            <main id="page-main">
                <div className="login-wrapper d-flex justify-content-center align-items-center flex-column">
                    <div className="verification-container signup-container">
                        <Logo />
                        <div className="form_info">
                            <div className="key_icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9998 21.3333C18.9454 21.3333 21.3332 18.9455 21.3332 16C21.3332 13.0545 18.9454 10.6667 15.9998 10.6667C13.0543 10.6667 10.6665 13.0545 10.6665 16C10.6665 18.9455 13.0543 21.3333 15.9998 21.3333Z" stroke="#856ECE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.3332 10.6667V17.3334C21.3332 18.3942 21.7546 19.4116 22.5048 20.1618C23.2549 20.9119 24.2723 21.3334 25.3332 21.3334C26.3941 21.3334 27.4115 20.9119 28.1616 20.1618C28.9118 19.4116 29.3332 18.3942 29.3332 17.3334V16C29.333 12.9907 28.3148 10.07 26.4442 7.71273C24.5736 5.35546 21.9606 3.70032 19.03 3.01641C16.0995 2.33251 13.0238 2.66007 10.303 3.94584C7.5822 5.23161 5.37638 7.39996 4.04419 10.0983C2.71201 12.7967 2.3318 15.8663 2.96541 18.8082C3.59901 21.75 5.20915 24.391 7.53402 26.3017C9.85889 28.2124 12.7618 29.2805 15.7706 29.3322C18.7795 29.384 21.7173 28.4163 24.1065 26.5867" stroke="#856ECE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="form_title">Verificaton Code</p>
                            <span className="frgtpsw_txt">We have sent you verification code on your email <b>{email}</b>.</span>
                        </div>
                        <form name="signup" className="sign-up">
                            <div className="form-control">
                                <input type="text" className="form-input" name="code" id="code" maxLength="6" minLength="6" placeholder="none" required onChange={handleForm}  />
                                <label for="email" className="form-label">Verification Code</label>
                                { !formData.forgot_error && formData.error && formData.error.code && <span className="error-msg">{formData.error.code}</span>}
                                { formData.forgot_error && <>
                                    <img className="error-msg-icon" src="../assets/images/Subtract.png" />
                                    <span className="error-msg" style={{ bottom : "-25px" }}>{formData.forgot_error}</span>
                                    </>
                                }
                            </div>
                            <div className="form-action">
                                <button type="button" className="form-btn sign-btn" onClick={checkVerification}>Verify Now</button>
                            </div>
                        </form>
                        <div className="action-text">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0834 7H2.91675" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.00008 11.0833L2.91675 7L7.00008 2.91667" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> <span>Wana Change <Link to="/forgot-password"> Email </Link ></span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Verification