import { Link } from "react-router-dom"
// import Logo from "../../components/Logo"
import WavingHand from "../assets/images/waving-hand.png"
import stateBuildingImage from "../assets/images/state-building.png"
import arrowDownImage from "../assets/images/arrow-down.svg"
import userImage from "../assets/images/user-img.png"
import { useState } from "react"

function Header() {

    const [profileState, setProfileState] = useState(false);
    const showHideProfileDropdown = () => {
        setProfileState(!profileState)
    }
    
    return (
        <header className="page-header">
                    <div className="header-left">
                        <div className="header-menu desktop-hide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        </div>
                        <h1 className="header-welcome">
                            Good Morning, Ana <img src={WavingHand} alt="waving-hand" width="20" height="20" />
                        </h1>
                    </div>
                    <div className="header-right">
                        <div className="state-column">
                            <div className="state-dropdown" onClick={showHideProfileDropdown}>
                                <div className="state-dropdown-icon">
                                    <img src={stateBuildingImage} alt="Building" width="34" height="34" />
                                </div>
                                <div className="state-dropdown-text">
                                    <span className="small">United States</span>
                                    <span className="state-name">Andrew Cafe</span>
                                </div>
                                <div className="state-dropdown-arrow">
                                    <img src={arrowDownImage} alt="Arrow" width="16" height="16" />
                                </div>
                            </div>
                            <div className={profileState ?" dropdown-active state-dropdown-list" : "state-dropdown-list"} >
                                <ul className="state-dropdown-items">
                                    <li className="state-dropdown-item">
                                        <a href="#">Andrew Cafe</a>
                                    </li>
                                    <li className="state-dropdown-item">
                                        <a href="#">Andrew Home</a>
                                    </li>
                                    <li className="state-dropdown-item">
                                        <a href="#">Andrew Heaven</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-user">
                            <span className="header-user-img">
                                <img src={userImage} alt="User" width="44" height="44" />
                            </span>
                        </div>
                    </div>
                </header>       
    )
}
export default Header