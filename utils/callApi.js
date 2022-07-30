import axios from "axios";
const callAPI = async (endpoint, method='GET', body)=>{
    // console.log(`https://fake-api-users.herokuapp.com/${endpoint}`);
    return axios({
        method: method,
        url: `https://fake-api-users.herokuapp.com/${endpoint}`,
        data: body
    }).catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })
}
export default callAPI;