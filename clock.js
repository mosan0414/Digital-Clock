let batteryLevel = 100;
let clockInterval;

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

function updateBattery() {
    if (batteryLevel > 0) {
        batteryLevel -= 1;
        document.getElementById('battery').textContent = `${batteryLevel}%`;
    } else {
        // 배터리가 0%일때, 디스플레이 꺼짐
        clearInterval(clockInterval); 

        document.getElementById('time').textContent = "";
        document.getElementById('battery').textContent = "";
    }
}



function startClockAndBattery() {
    updateClock();
    updateBattery();
    clockInterval = setInterval(updateClock, 1000);
    setInterval(updateBattery, 1000);
}

startClockAndBattery();