const moment = require("moment");
const tz = require('moment-timezone');

module.exports = (function(date) {
    return moment(date).tz('Pacific/Auckland').format('YYYY-MM-DDTHH:mm:ss');
});
