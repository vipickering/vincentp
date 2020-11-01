// Datetime is saved in UTC, but let's display it in local time
module.exports = (function(date) {
    // let kiwiTime = new Date(date).toLocaleString("en-NZ", {timeZone: "Pacific/Auckland"});
    const isoString = new Date(date).toISOString();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: 'Pacific/Auckland',
        timeZoneName: 'short'
      };

    const nzDate = new Date(isoString);
    const kiwiTime = new Intl.DateTimeFormat("en-NZ", options).format(nzDate);
    return kiwiTime;
});
