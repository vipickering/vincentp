const moment = require("moment");
const tz = require('moment-timezone');

module.exports = (function(date) {
    const dateTime = moment(date).format('YYYY-MM-DDTHH:mm:ss');
    return dateTime;
});
