const moment = require("moment");

module.exports = (function(date) {
    return moment(date, "YYYY-MM-DDThh:mm:ssZ").format();
});

//2020-08-31T21:36:55.552+01:00
