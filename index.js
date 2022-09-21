let date = new Date()
console.log(date)

let hourSpan = document.getElementById("hours")
let minuteSpan = document.getElementById("minutes")
let secondSpan = document.getElementById("seconds")
let amorpmSpan = document.getElementById("amorpm")

function updateTime() {
    let date = new Date()
  
    hourSpan.textContent = date.getHours()
    minuteSpan.textContent = date.getMinutes()
    secondSpan.textContent = date.getSeconds()
    if(hourSpan.textContent <= 12) {
        amorpmSpan.textContent = "AM"
    }else{
        amorpmSpan.textContent = "PM"
    }
 setTimeout(updateTime,1000)
}
updateTime()



// const hourEl = document.querySelector(".hour");
// const minuteEl = document.querySelector(".minutes")
// const secondEl = document.querySelector(".seconds")

// function updateTime() {
//     const currentTime = new Date()

//     console.log(currentTime)
//     const hours = currentTime.getHours()
//     const minutes = currentTime.getMinutes()
//     const seconds = currentTime.getSeconds()
//     const hourDeg = (hours/12) * 360;
//     const minutesDeg = (minutes / 60) *360;
//     const secondsDeg = (seconds / 60) *360;
//     hourEl.style.transform = `rotate(${hourDeg}deg)`
//     minuteEl.style.transform = `rotate(${minutesDeg}deg)`
//     secondEl.style.transform = `rotate(${secondsDeg}deg)`

   
//     setTimeout(updateTime,1000)
// }
// updateTime()