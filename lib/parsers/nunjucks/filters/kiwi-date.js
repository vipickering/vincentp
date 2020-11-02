// Datetime is saved in UTC, but let's display it in local time
module.exports = (function(date) {
    // let kiwiTime = new Date(date).toLocaleString("en-NZ", {timeZone: "Pacific/Auckland"});
    const isoString = new Date(date).toISOString();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Pacific/Auckland',
        timeZoneName: 'short'
      };

    const nzDate = new Date(isoString);
    const kiwiTime = new Intl.DateTimeFormat("en-GB", options).format(nzDate);
    return kiwiTime;
});
