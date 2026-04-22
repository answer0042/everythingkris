const dateElement = document.querySelector('#dateElement');

function formatDate(d) {
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function updateDate() {
    const now = new Date();
    dateElement.textContent = formatDate(now);
}

// Update once page is opened
updateDate();