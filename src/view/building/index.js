import React, { useState,useEffect } from "react";
import Building from "./Building";
import '../../assets/css/building.css'
import '../../assets/css/fontawesome.css'
import '../../assets/css/fonts.css'
import ApiCall from "../../Api/index"
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/user/user.action";
import { useNavigate } from "react-router-dom";

function Index() {
    const [siteName, setSiteName] = useState(false)
    const [location, setLocation] = useState(false)
    const [sort, setSort] = useState(false)
    const [building,setBuildingList] = useState([]);
    const token = useSelector((state) => state.user.userToken);
    const dispatch =  useDispatch()
    const navigate = useNavigate()

    const showHideSiteNameDropdown = () =>  {
        setSiteName(!siteName)
    }
    const showHideLocationDropdown = () =>  {
        setLocation(!location)
    }
    const showHideSortDropdown = () =>  {
        setSort(!sort)
    }
    const delivery = (id,month) => {
        navigate('/deliver/'+id+'/'+month);
    }
    useEffect(() => {
        (async() => {
            const buildingList = await ApiCall('v1/manage-building-web', 'get',null,token);
            //console.log("buildingList",buildingList.data.RESULT)
            if(buildingList.data){
                setBuildingList(buildingList?.data?.RESULT);
            }else{
                if(buildingList.error == 'Unauthorized'){
                    dispatch(setLogout())
                }
                setBuildingList([])
            }
        })()
    }, [])

    // console.log(token)

    return (
        <Building siteName={siteName} siteNameDropdown={showHideSiteNameDropdown} location={location} locatonDropdown={showHideLocationDropdown} sort={sort} sortDropdown={showHideSortDropdown} buildingListData={building} delivery={delivery} />
    )
}
export default Index