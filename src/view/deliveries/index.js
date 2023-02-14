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
  const [sortText, setSortText] = useState()
  const ref = useRef(null);

  const graphFilter = (id) => {
    setSort(!sort)
  }

  useEffect(() => {
    (async () => {
      const deliveryCount = await ApiCall('v1/delivery-count-web/' + id + '/' + month, 'get', null, token);
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

  // console.log(token)

  return (
    <Delivery deliveryCount={deliveryCount} graphFilter={graphFilter} sort={sort} />
  )
}
export default Index