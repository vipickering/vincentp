const dayjs = require('dayjs');

module.exports = (function(date) {
    return dayjs(date).toISOString();
});
