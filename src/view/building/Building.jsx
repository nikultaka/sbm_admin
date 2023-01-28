import { Link } from "react-router-dom"
import Logo from "../../components/Logo"

function Building() {
    return(
        <div className="column-main-wrapper">
                    <div className="column-main-container">
                        <div className="column-topbar-section">
                            <div className="column-main-title">
                                <h2 className="column-title">Sites</h2>
                            </div>
                            <div className="column-topbar-right">
                                <div className="topbar-col sitename-col">
                                    <div className="topbar-icon-col">
                                        <img src="images/building.svg" alt="building" width="16" height="16" />
                                    </div>
                                    <div className="topbar-dropdown">
                                        <div className="topbar-dropdown-toggle">
                                            <span className="topbar-dropdown-text">Site name</span>
                                            <span className="topbar-dropdown-arrow"><img src="images/arrow-down.svg" alt="Arrow" width="16" height="16" /></span>
                                        </div>
                                        <ul className="topbar-dropdown-items">
                                            <li className="topbar-dropdown-item"><a href="#">Heaven</a></li>
                                            <li className="topbar-dropdown-item"><a href="#">Home</a></li>
                                            <li className="topbar-dropdown-item"><a href="#">Garden</a></li>
                                            <li className="topbar-dropdown-item"><a href="#">Cafe</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="topbar-col location-col">
                                    <div className="topbar-icon-col">
                                        <img src="images/location.svg" alt="location" width="16" height="16" />
                                    </div>
                                    <div className="topbar-dropdown">
                                        <div className="topbar-dropdown-toggle">
                                            <span className="topbar-dropdown-text">Location</span>
                                            <span className="topbar-dropdown-arrow"><img src="images/arrow-down.svg" alt="Arrow" width="16" height="16" /></span>
                                        </div>
                                        <ul className="topbar-dropdown-items">
                                            <li className="topbar-dropdown-item"><a href="#">2174 Hardesty Street, Elkins, Montana</a></li>
                                            <li className="topbar-dropdown-item"><a href="#">2174 Hardesty Street, Elkins, Montana</a></li>
                                            <li className="topbar-dropdown-item"><a href="#">2174 Hardesty Street, Elkins, Montana</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="topbar-col sort-col">
                                    <div className="topbar-dropdown">
                                        <div className="topbar-dropdown-toggle">
                                            <img src="images/sort.svg" alt="sort" width="16" height="16" />
                                        </div>
                                        <ul className="topbar-dropdown-items">
                                            <li className="topbar-dropdown-item"><a href="#">New</a></li>
                                            <li className="topbar-dropdown-item"><a href="#">Old</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-list-section">
                            <div className="site-items">
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="site-item">
                                    <div className="site-item-col">
                                        <div className="site-item-img">
                                            <img src="images/home-img.png" alt="Home" width="282" height="167" />
                                        </div>
                                        <div className="site-item-detail">
                                            <div className="site-item-name">
                                                Dream heaven
                                            </div>
                                            <div className="site-item-location">
                                                <span className="icon"><img src="images/location.svg" alt="Location" width="17" height="17" /></span>
                                                <span className="text">2174 Hardesty Street, Elkins, Montana</span>
                                            </div>
                                            <div className="site-item-time">
                                                <span className="icon"><img src="images/clock.svg" alt="clock" width="15" height="15" /></span>
                                                <span className="text">08:10 - 10:10</span>
                                            </div>
                                            <div className="site-user-detail">
                                                <div className="site-user-left">
                                                    <span className="icon"><img src="images/david-user.png" alt="User" width="35" height="35" /></span>
                                                    <span className="text">David Jordan</span>
                                                </div>
                                                <div className="site-user-right">
                                                    <a href="#">
                                                        <span className="icon"><img src="images/phone.svg" alt="phone" width="24" height="24" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
    )
}

export default Building;