import Logo from "../../components/Logo"

function ChangePassword() {

    return (
        <div className="page-wrapper signup-pagewrapper">
            <main id="page-main">
                <div className="login-wrapper">
                    <div className="change_psw_container signup-container">
                        <Logo/>
                        <div className="form_info">
                            <div className="key_icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3333V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V17.3333C28 15.8606 26.8061 14.6667 25.3333 14.6667Z" stroke="#856ECE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.3335 14.6667V9.33332C9.3335 7.56521 10.0359 5.86952 11.2861 4.61928C12.5364 3.36904 14.2321 2.66666 16.0002 2.66666C17.7683 2.66666 19.464 3.36904 20.7142 4.61928C21.9644 5.86952 22.6668 7.56521 22.6668 9.33332V14.6667" stroke="#856ECE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="form_title">Change Password</p>
                            <span className="frgtpsw_txt">Please enter new password which should not be relevent to old password.</span>
                        </div>
                        <form name="signup" className="sign-up">
                            <div className="form-control">
                                <input type="password" name="password" className="form-input" placeholder="none" required />
                                <label for="password" className="form-label">New Password</label>
                                <span className="psw-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9834 10C12.9834 11.65 11.6501 12.9833 10.0001 12.9833C8.35006 12.9833 7.01672 11.65 7.01672 10C7.01672 8.35 8.35006 7.01667 10.0001 7.01667C11.6501 7.01667 12.9834 8.35 12.9834 10Z" stroke="#201D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.99999 16.8917C12.9417 16.8917 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00833 17.5917 7.83333C15.6833 4.83333 12.9417 3.1 9.99999 3.1C7.05833 3.1 4.31666 4.83333 2.40833 7.83333C1.65833 9.00833 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8917 9.99999 16.8917Z" stroke="#201D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" className="form-input" placeholder="none" required />
                                <label for="password" className="form-label">Confirm-New Password</label>
                                <span className="psw-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9834 10C12.9834 11.65 11.6501 12.9833 10.0001 12.9833C8.35006 12.9833 7.01672 11.65 7.01672 10C7.01672 8.35 8.35006 7.01667 10.0001 7.01667C11.6501 7.01667 12.9834 8.35 12.9834 10Z" stroke="#201D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.99999 16.8917C12.9417 16.8917 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00833 17.5917 7.83333C15.6833 4.83333 12.9417 3.1 9.99999 3.1C7.05833 3.1 4.31666 4.83333 2.40833 7.83333C1.65833 9.00833 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8917 9.99999 16.8917Z" stroke="#201D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                            </div>
                            <div className="form-action">
                                <button type="submit" className="form-btn sign-btn">Verify Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default ChangePassword