import React, { useState, useEffect } from "react";
import Building from "./Delivery";
import '../../assets/css/building.css'
import '../../assets/css/fontawesome.css'
import '../../assets/css/fonts.css'
import ApiCall from "../../Api/index"
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/user/user.action";
import Delivery from "./Delivery";
import { faker } from '@faker-js/faker';
import { useParams } from 'react-router';
import {useRef} from 'react';

function Index() {
  const [deliveryCount, setDeliveryCount] = useState([]);
  const token = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch()
  const { id, month } = useParams();
  const [sort, setSort] = useState(false)
  const [sortType, setSortType] = useState(2)
  const ref = useRef(null);
  const [logData,setLogData] = useState();

  const graphFilter = (id) => {
    setSort(!sort)
  }

  const graphFilterData = (id) => {
    setSortType(id);
  }

  useEffect(() => {
    (async () => {
      const deliveryCount = await ApiCall('v1/delivery-count-web/' + id + '/' + month+'/2', 'get', null, token);
      if (deliveryCount.data) {
        setDeliveryCount(deliveryCount?.data?.RESULT);
      } else {
        if (deliveryCount.error == 'Unauthorized') {
          dispatch(setLogout())
        }
        setDeliveryCount([])
      }   
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const activity = await ApiCall('v1/manage-package-web/activity/log/'+id, 'get', null, token);
      console.log("activity",activity?.data);
      if (activity?.data) {
        setLogData(activity?.data?.RESULT);
      } else {
        if (activity.error == 'Unauthorized') {
          dispatch(setLogout())
        }
        setLogData([])
      }   
    })()

  }, [id])
  
 
  // console.log(token)

  return (
    <Delivery deliveryCount={deliveryCount} graphFilter={graphFilter} sort={sort} sortType={sortType} graphFilterData={graphFilterData} logs={logData} />
  )
}
export default Index