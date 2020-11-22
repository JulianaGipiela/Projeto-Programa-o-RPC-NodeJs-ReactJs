const axios = require('axios')

const getData = async(datetoAPI)=>{
    const datatoAPI = await axios.get(`https://epg-api.video.globo.com/programmes/1337?date=${datetoAPI}`)
    return datatoAPI.data
}

module.exports = {
    getData: getData
}