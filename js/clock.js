const twoDigits = (value) => value.toString().padStart(2, '0');



const renderTime = () => {
    const dateTime = new Date();
    const time = document.querySelector('.time');

    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();

    time.textContent = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
}

setInterval(renderTime, 1000);

renderTime();

const initAlarm = () => {
    const btn = document.getElementById('setTimerBtn');

    btn.addEventListener('click', () => {
        const seconds = document.getElementById('seconds-field').value;
        callAlarm(seconds);
    })
}

const callAlarm = (delay) => {
    const alarmModal = document.getElementById('alarm-modal');
    const alarmSound = document.getElementById('alarm-sound');
    const alarmStop = document.getElementById('stop-alarm');

    setTimeout(() => {
        alarmModal.classList.add('show');
        alarmSound.play();

        alarmStop.addEventListener('click',()=> {
            alarmModal.classList.remove('show');
            alarmSound.pause();
        })

    }, delay * 1000);
}

initAlarm();
