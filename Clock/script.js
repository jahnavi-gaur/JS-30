const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hour-hand');

function saveDate(){
    let now = new Date()
    let seconds = now.getSeconds()
    let secDeg = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secDeg}deg)`

    let min = now.getMinutes()
    let minDeg = ((min / 60) * 360) + 90
    minHand.style.transform = `rotate(${minDeg}deg)`

    let hr = now.getHours()
    let hrDeg = ((min / 12) * 360) + 90
    hrHand.style.transform = `rotate(${hrDeg}deg)`
}

setInterval(saveDate,1000)