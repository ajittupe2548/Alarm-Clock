let alarmhours = document.getElementById('hours');
let alarmmin = document.getElementById('min');
let alarmsec = document.getElementById('sec');
let ap = document.getElementById('ap');
let btn = document.getElementById('btn');
let str;

count(alarmhours, 13);
count(alarmmin, 61);
count(alarmsec, 61);

function count(param, no) {
    for (let i = 2; i < no; i++) {
        i = less10(i);
        let elem = document.createElement('option');
        let text = document.createTextNode(`${i}`);
        elem.setAttribute('id', `${param}${i}`);
        elem.appendChild(text);
        param.appendChild(elem);
    };
};

function less10(param) {
    if (param < 10) {
        param = "0" + param;
    }
    return param;
}

btn.addEventListener('click', () => {
    console.log('you clicked');
    str = `${alarmhours.value}:${alarmmin.value}:${alarmsec.value} ${ap.value}`;
    console.log('Alarm set for:', str);
});
setInterval(displaytime, 1000, str);

function displaytime() {
    time = new Date();
    if (time.getHours() > 12) {
        var hours = time.getHours() - 12;
        hours = less10(hours);
        var a = 'PM';
    }
    else {
        var hours = time.getHours();
        hours = less10(time.getHours());
        var a = 'AM';
    }
    let min = less10(time.getMinutes());
    let sec = less10(time.getSeconds());

    if (str == `${hours}:${min}:${sec} ${a}`);
    document.getElementById("watch").innerHTML = `${hours}:${min}:${sec} ${a}`;
    if (str == `${hours}:${min}:${sec} ${a}`) {
        var audio = new Audio('Ring.mp3');
        audio.play();
        setTimeout(() => {
            audio.pause();
        }, 60000);
    }
}