const moment = require("moment");

module.exports = (function(date) {
    return moment(date).toDate().toUTCString();
});