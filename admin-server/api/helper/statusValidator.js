const ServiceStatus = require('../enums/RequestStatues');


const statusValidator =(serviceStatus)=> {
    return Object.keys(ServiceStatus).find((status) => status.toUpperCase()===serviceStatus.toUpperCase())
}

module.exports = { statusValidator }