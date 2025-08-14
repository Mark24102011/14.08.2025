function updateTimer() {
    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    const formattedDate = `${dayName}, ${monthName} ${day}, ${year}`;

    document.getElementById('timer').textContent = `${formattedDate} | ${formattedTime}`;
}

updateTimer();
setInterval(updateTimer, 1000);
