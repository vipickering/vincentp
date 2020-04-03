module.exports = (function (value, spaces) {
    value = value.toString();
    const jsonString = JSON.stringify(value, null, spaces).replace(/</g, '\\u003c');
    return jsonString;
});
