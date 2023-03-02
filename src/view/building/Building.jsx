import { Link } from "react-router-dom"
import Logo from "../../components/Logo"
import buildingImage from "../../assets/images/home-img.png"
import LocationImage from "../../assets/images/location.svg"
import clockImage from "../../assets/images/clock.svg"
import phoneImage from "../../assets/images/phone.svg"
import userImage from "../../assets/images/david-user.png"
import buildingSVGImage from "../../assets/images/building.svg"
import arrowDownImage from "../../assets/images/arrow-down.svg"
import sortImage from "../../assets/images/sort.svg"
import React, { useState,useEffect } from "react";

function Building({ siteName, siteNameDropdown, location, locatonDropdown, sort, sortDropdown, buildingListData, delivery }) {

    const [search, setSearch] = useState();
    const [buildingList,setBuildingList] = useState([]);

    useEffect(() => {
        setBuildingList(buildingListData);
    }, [buildingListData])
    
    const serachLog = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value);
        console.log(buildingListData)
        if (e.target.value) {
            const filtered = buildingListData.filter(entry => Object.values(entry).some(val => val?.toString()?.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())));
            setBuildingList(filtered)
            console.log(e.target.value);
        } else {
            setBuildingList(buildingListData);
        }
    }

    return (
        <div className="column-main-wrapper">
            <div className="column-main-container">
                <div className="column-topbar-section">
                    <div className="column-main-title">
                        <h2 className="column-title">Sites</h2>
                        
                    </div>
                    <div className="column-topbar-right">
                        <div className="search-section" style={{float:'right'}}>
                            <div className="input-group">
                                <input id="search" className="input-field" type="text" placeholder="Search here..." name="Search" value={search} onChange={serachLog} />
                                <button className="btn search-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.33268 15.0003C9.81183 15 11.2484 14.5049 12.4135 13.5937L16.0768 17.257L17.2552 16.0787L13.5919 12.4153C14.5035 11.25 14.999 9.81319 14.9994 8.33366C14.9994 4.65783 12.0085 1.66699 8.33268 1.66699C4.65685 1.66699 1.66602 4.65783 1.66602 8.33366C1.66602 12.0095 4.65685 15.0003 8.33268 15.0003ZM8.33268 3.33366C11.0902 3.33366 13.3327 5.57616 13.3327 8.33366C13.3327 11.0912 11.0902 13.3337 8.33268 13.3337C5.57518 13.3337 3.33268 11.0912 3.33268 8.33366C3.33268 5.57616 5.57518 3.33366 8.33268 3.33366Z" fill="#201D1D" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="topbar-col sitename-col" style={{ display:'none' }}>
                            <div className="topbar-icon-col">
                                <img src={buildingSVGImage} alt="building" width="16" height="16" />
                            </div>
                            <div className="topbar-dropdown" onClick={siteNameDropdown}>
                                <div className="topbar-dropdown-toggle">
                                    <span className="topbar-dropdown-text">Site name</span>
                                    <span className="topbar-dropdown-arrow"><img src={arrowDownImage} alt="Arrow" width="16" height="16" /></span>
                                </div>
                                <ul className={siteName ? "topbar-dropdown-items dropdown-active" : "topbar-dropdown-items"}>
                                    <li className="topbar-dropdown-item"><a href="#">Heaven</a></li>
                                    <li className="topbar-dropdown-item"><a href="#">Home</a></li>
                                    <li className="topbar-dropdown-item"><a href="#">Garden</a></li>
                                    <li className="topbar-dropdown-item"><a href="#">Cafe</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="topbar-col location-col" style={{ display:'none' }}>
                            <div className="topbar-icon-col">
                                <img src={LocationImage} alt="location" width="16" height="16" />
                            </div>
                            <div className="topbar-dropdown" onClick={locatonDropdown}>
                                <div className="topbar-dropdown-toggle">
                                    <span className="topbar-dropdown-text">Location</span>
                                    <span className="topbar-dropdown-arrow"><img src={arrowDownImage} alt="Arrow" width="16" height="16" /></span>
                                </div>
                                <ul className={location ? "topbar-dropdown-items dropdown-active" : "topbar-dropdown-items"}>
                                    <li className="topbar-dropdown-item"><a href="#">2174 Hardesty Street, Elkins, Montana</a></li>
                                    <li className="topbar-dropdown-item"><a href="#">2174 Hardesty Street, Elkins, Montana</a></li>
                                    <li className="topbar-dropdown-item"><a href="#">2174 Hardesty Street, Elkins, Montana</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="topbar-col sort-col" style={{ display:'none' }}>
                            <div className="topbar-dropdown" onClick={sortDropdown}>
                                <div className="topbar-dropdown-toggle">
                                    <img src={sortImage} alt="sort" width="16" height="16" />
                                </div>
                                <ul className={sort ? "topbar-dropdown-items dropdown-active" : "topbar-dropdown-items"}>
                                    <li className="topbar-dropdown-item"><a href="#">New</a></li>
                                    <li className="topbar-dropdown-item"><a href="#">Old</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column-list-section">
                    <div className="site-items">
                        {
                            buildingList?.length > 0 ?
                                buildingList?.map(building => {
                                    let newDate = new Date()
                                    let monthID = newDate.getMonth() + 1;
                                    return (
                                        <div className="site-item" onClick={() => delivery(building?.id, monthID)} style={{ cursor: 'pointer' }} >
                                            <div className="site-item-col">
                                                <div className="site-item-img">
                                                    <img src={buildingImage} alt="Home" width="282" height="167" />
                                                </div>
                                                <div className="site-item-detail">
                                                    <div className="site-item-name">
                                                        {building.name}
                                                    </div>
                                                    <div className="site-item-location">
                                                        <span className="icon"><img src={LocationImage} alt="Location" width="17" height="17" /></span>
                                                        <span className="text">{building.full_address}</span>
                                                    </div>
                                                    <div className="site-item-time" style={{ display:'none' }}>
                                                        <span className="icon"><img src={clockImage} alt="clock" width="15" height="15" /></span>
                                                        <span className="text">-</span>
                                                    </div>
                                                    <div className="site-user-detail" style={{ display:'none' }}>
                                                        <div className="site-user-left">
                                                            <span className="icon"><img src={userImage} alt="User" width="35" height="35" /></span>
                                                            <span className="text">{building?.buildingmanager != null && building?.buildingmanager?.users.name}</span>
                                                        </div>
                                                        <div className="site-user-right">
                                                            <a href="#">
                                                                <span className="icon"><img src={phoneImage} alt="phone" width="24" height="24" /></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                ''
                        }

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Building;