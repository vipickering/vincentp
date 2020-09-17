const moment = require("moment");

module.exports = (function() {
    const dato = new Date(dateString);
    return moment(dato).format();
});
