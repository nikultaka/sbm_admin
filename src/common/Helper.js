
let helper = {
    Test: 'test',
}

export default helper;



export function ApiHeaders(token) {
    let apiHeader = {};
    if (token != null) {
        apiHeader['x-access-token'] = token
    }
    apiHeader['Access-Control-Allow-Origin'] = '*'
    apiHeader['Access-Control-Allow-Methods'] = 'GET,POST,PUT,PATCH,DELETE'
    apiHeader['Content-Type'] = 'application/json'
    apiHeader['Accept'] = 'application/json'

    return apiHeader;
}


