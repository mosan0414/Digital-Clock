
const maxAlarms = 3; // 최대 알람 개수
        const alarms = [];

        function setAlarm() {
            if (alarms.length >= maxAlarms) {
                alert('최대 3개의 알람까지 설정할 수 있습니다.');
                return;
            }

            const alarmTimeInput = document.getElementById('alarmTime').value;
            if (isValidTime(alarmTimeInput)) {
                alarms.push({ time: alarmTimeInput, triggered: false });
                alert(`알람이 ${alarmTimeInput}에 설정되었습니다.`);
                updateAlarmList();
            } else {
                alert('올바른 시간을 입력하세요 (HH:MM:SS 형식).');
            }
        }

        function isValidTime(timeString) {
            const pattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/;
            return pattern.test(timeString);
        }

        function updateAlarmList() {
            const alarmsList = document.getElementById('alarms');
            alarmsList.innerHTML = '';
            for (const alarm of alarms) {
                const alarmItem = document.createElement('li');
                alarmItem.textContent = alarm.time;
                alarmsList.appendChild(alarmItem);
            }
        }

        function checkAlarms() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;

            for (const alarm of alarms) {
                if (alarm.time === currentTime && !alarm.triggered) {
                    alarm.triggered = true;
                    alert('알람이 울립니다!');
                    // 알람이 울릴 때 오디오를 재생합니다.
                    document.getElementById('alarmSound').play();
                }
            }
        }

        setInterval(checkAlarms, 1000);
        document.getElementById('addAlarm').addEventListener('click', setAlarm);
