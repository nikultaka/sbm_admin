import React, { useState,useEffect } from "react";
import Building from "./Building";
import '../../assets/css/building.css'
import '../../assets/css/fontawesome.css'
import '../../assets/css/fonts.css'
import ApiCall from "../../Api/index"
import { useSelector, useDispatch } from "react-redux";

function Index() {
    const [siteName, setSiteName] = useState(false)
    const [location, setLocation] = useState(false)
    const [sort, setSort] = useState(false)
    const [building,setBuildingList] = useState([]);
    const token = useSelector((state) => state.user.userToken);

    const showHideSiteNameDropdown = () =>  {
        setSiteName(!siteName)
    }
    const showHideLocationDropdown = () =>  {
        setLocation(!location)
    }
    const showHideSortDropdown = () =>  {
        setSort(!sort)
    }
    useEffect(() => {
        (async() => {
            const buildingList = await ApiCall('v1/manage-building', 'get',null,token);
            if(buildingList.data){
                setBuildingList(buildingList.data.RESULT.data);
            }else{
                setBuildingList([])
            }
        })()
    }, [])

    return (
        <Building siteName={siteName} siteNameDropdown={showHideSiteNameDropdown} location={location} locatonDropdown={showHideLocationDropdown} sort={sort} sortDropdown={showHideSortDropdown} buildingList={building} />
    )
}
export default Index