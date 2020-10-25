const dayjs = require('dayjs');

module.exports = (function(date) {
    // return dayjs(date).format('YYYY-MM-DDTHH:mm:ss');
    return dayjs(date).toJSON();
});
