const moment = require("moment");
const tz = require('moment-timezone');

module.exports = (function(date) {
    const dateTime = moment(date).tz("Pacific/Auckland").format('YYYY-MM-DDTHH:mm:ss');
    return dateTime;
});
