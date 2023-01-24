import { ApiHeaders } from "../common/Helper";
import axios from "axios";
const { resolve } = require("./resolver");


const index = async (url, method, data = null, token = null) => {

    return await resolve(
        axios({
            url: process.env.REACT_APP_API_URL + url,
            method: method,
            headers: ApiHeaders(token),
            data: data
        })
            .then(response => response.data)
    )
}

export default index;

