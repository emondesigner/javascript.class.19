// MODE CHANGE START

if(localStorage.getItem('mode')=== 'modeChange'){
    document.documentElement.classList.add('modeChange');
    document.querySelector('.btn').innerText = "Dark"

}
document.querySelector('.btn').addEventListener('click',function(){
    // document.documentElement.classList.toggle('modeChange')
    // localStorage.setItem('mode','modeChange')
    if(document.documentElement.classList.contains('modeChange')){
        document.documentElement.classList.remove('modeChange');
        localStorage.removeItem('mode')
        document.querySelector('.btn').innerText = "Light"

    }
    else{
        document.documentElement.classList.add('modeChange');
        localStorage.setItem('mode', 'modeChange');
        document.querySelector('.btn').innerText = "Dark"
        
    }
})

// MODE CHANGE END



// ANALOG CLOCK START
let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');


function displayTime(){
 let date = new Date();
  
 let hh = date.getHours();
 let mn = date.getMinutes();
 let sc = date.getSeconds();
  
 let hRotation = 30*hh + mn/2;
 let mRotation = 6*mn;
 let sRotation = 6*sc;


 hour.style.transform = `rotate(${hRotation}deg)`;
 min.style.transform = `rotate(${mRotation}deg)`;
 sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);
// ANALOG CLOCK END

// DIGITAL CLOCK START

let hour2 = document.querySelector('#hour2');
let min2 = document.querySelector('#min2');
let sec2 = document.querySelector('#sec2');
let am = document.querySelector('#am');

setInterval(function(){

let date = new Date();

let hh = date.getHours();
let mn = date.getMinutes();
let sc = date.getSeconds();

hour2.innerText = hh > 12 ? hh- 12 : hh;
// hour2.innerText = hh < 10 ? '0'+ hh : hh;
min2.innerText = mn < 10 ? '0' + mn  : mn;
sec2.innerText = sc < 10 ? '0' + sc : sc;
am.innerText = hh > 12 ? 'PM' : "AM";
},1000)
// DIGITAL CLOCK END

// STOP WATCH CLOCK START
let stopBtn = document.querySelector('#stopBtn');
let startBtn = document.querySelector('#startBtn');
let resetBtn = document.querySelector('#resetBtn');

// STOP WATCH CLOCK END
