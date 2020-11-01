// Datetime is saved in UTC, but let's display it in local time
module.exports = (function(date) {
    const isoString = new Date(date).toISOString();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: 'Europe/London',
        timeZoneName: 'short'
      };

    const gmtDate = new Date(isoString);
    const londonTime = new Intl.DateTimeFormat("en-GB", options).format(gmtDate);
    return londonTime;
});
