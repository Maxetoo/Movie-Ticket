function formatDate(inputDate) {
    const dateObj = new Date(inputDate); // Parse the date input
    return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}


function formatTime(inputTime, inputDate = new Date()) {
    const dateObj = new Date(inputDate); // Create a Date object
    const [hours, minutes] = inputTime.split(':'); // Extract hours and minutes
    dateObj.setHours(hours);
    dateObj.setMinutes(minutes);
    return dateObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }) + 'T18:00:00Z'
}

function formatToISO(date, time) {
    // Create a new Date object using the input date and time
    const [hours, minutes] = time.split(':'); // Extract hours and minutes from the time
    const dateObj = new Date(date); // Create a Date object for the input date
    dateObj.setUTCHours(hours); // Set hours in UTC
    dateObj.setUTCMinutes(minutes); // Set minutes in UTC
    dateObj.setUTCSeconds(0); // Set seconds to 0
    dateObj.setUTCMilliseconds(0); // Set milliseconds to 0

    // Return the date as an ISO string
    return dateObj.toISOString(); // ISO 8601 format
}


export {formatDate, formatTime, formatToISO}

