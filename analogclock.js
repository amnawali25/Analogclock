// let hour =document.getElementById('hour');
// let min =document.getElementById('min');
// let sec =document.getElementById('sec');
// function displaytime(){
//     let d =new Date();
//     let hourtime = d.getHours();
//     let mintime = d.getMinutes();
//     let sectime = d.getSeconds();
//     let hourrotate = 30*hourtime + mintime/2;
//     let minrotate = 6*mintime ;
//     let secrotate = 6*sectime;
//     hour.style.transform= 'rotate(${hourrotate}deg)';
//     min.style.transform= 'rotate(${minrotate}deg)';
//     sec.style.transform= 'rotate(${secrotate}deg)';
// }
// setInterval(displaytime,1000);
// const sec = document.getElementById('sec');
// const min = document.getElementById('min');
// const hour = document.getElementById('hour');
// function clocktick(){
//    const d =new Date();
//    const sec = d.getSeconds()/60;
//    const min =(sec + d.getMinutes())/60;
//    const hour = (min +d.getHours())/12;}
//    rotateclockhand(sec,sec);
//    rotateclockhand(min,min);
//    rotateclockhand(hour,hour);
// }
// function rotateclockhand(element,rotation){
//     element.style.setProperty('--rotate',rotation*360);
// }
// setInterval(clocktick,1000)
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime() {
    let d = new Date();
    let hourtime = d.getHours();
    let mintime = d.getMinutes();
    let sectime = d.getSeconds();

    let hourrotate = 30 * hourtime + mintime / 2;
    let minrotate = 6 * mintime;
    let secrotate = 6 * sectime;

    hour.style.transform = `rotate(${hourrotate}deg)`;
    min.style.transform = `rotate(${minrotate}deg)`;
    sec.style.transform = `rotate(${secrotate}deg)`;
}

setInterval(displaytime, 1000);