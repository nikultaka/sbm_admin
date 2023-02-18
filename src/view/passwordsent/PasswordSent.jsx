import Logo from "../../components/Logo"
import { Link } from "react-router-dom"

function PasswordSent() {

    return (
        <div className="page-wrapper signup-pagewrapper">
            <main id="page-main">
                <div className="login-wrapper">
                    <div className="change_psw_container signup-container" style={{textAlign : 'center'}}>
                        <Link to="/login"><Logo /></Link>
                        <div className="form_info">
                            <div className="key_icon"> 
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3333V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V17.3333C28 15.8606 26.8061 14.6667 25.3333 14.6667Z" stroke="#856ECE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.3335 14.6667V9.33332C9.3335 7.56521 10.0359 5.86952 11.2861 4.61928C12.5364 3.36904 14.2321 2.66666 16.0002 2.66666C17.7683 2.66666 19.464 3.36904 20.7142 4.61928C21.9644 5.86952 22.6668 7.56521 22.6668 9.33332V14.6667" stroke="#856ECE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="form_title">New Password Sent</p>
                            <span className="frgtpsw_txt">It should reach your inbox within minutes.</span>
                        </div> 
                    </div>
                </div>
            </main>
        </div>
    )
}
export default PasswordSent