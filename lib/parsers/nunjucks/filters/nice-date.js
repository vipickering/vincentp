// Datetime is saved in UTC, but let's display it in local time
module.exports = (function(date) {
    let niceDate;
    niceDate = new Date(date).toLocaleString("en-NZ", {timeZone: "Pacific/Auckland"});
    const isoString = new Date(date).toISOString();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
      };

    const niceDateTime = new Date(isoString);
    niceDate = new Intl.DateTimeFormat("en-GB", options).format(niceDateTime);
    return niceDate;
});
