const dayjs = require('dayjs');
let AdvancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(AdvancedFormat);

module.exports = (function(date, format) {
    return dayjs(date).format(format);
});
