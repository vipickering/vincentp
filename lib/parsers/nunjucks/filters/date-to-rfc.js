const moment = require("moment");

module.exports = (function(date) {
    // return moment(date).format("DD, MM YYYY hh:mm:ss Z");
    return moment(date).format("DD MMM YYYY hh:mm:ss Z");
});
