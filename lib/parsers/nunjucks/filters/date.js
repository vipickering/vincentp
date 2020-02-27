const moment = require("moment");

module.exports = (function(date, format) {
    return moment(date).format(format);
});