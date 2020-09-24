const signin = document.querySelector(".sign-in");
const modalbg = document.querySelector(".modal-bg")
const cross = document.querySelector(".cross");
const topLink = document.querySelector(".top-link");
const carousel = document.getElementById("home");
const navbar = document.querySelector(".head");



window.addEventListener("scroll", function () {
  let scrollHeight = window.pageYOffset;
  let carouselHeight = carousel.getBoundingClientRect().height;
  if (scrollHeight > carouselHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }

  if (scrollHeight > 1150) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});


signin.addEventListener("click", function () {
  modalbg.classList.add("modal-active");
});

cross.addEventListener("click", function () {
  modalbg.classList.remove("modal-active");
});

window.addEventListener("click", function (event) {
  if (event.target == modalbg) {
    modalbg.classList.remove("modal-active")
    console.log(event)
  }
})













const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline= document.querySelector('.deadline');
const items=document.querySelectorAll('.deadline-format h4')

//to get date 

let tempDate=new Date();
let tempYear=tempDate.getFullYear();
let tempMonth=tempDate.getMonth();
let tempDay=tempDate.getDate();

const futureDate=new Date(tempYear,tempMonth,tempDay + 10 ,11 ,30 , 0)

const futureTime=futureDate.getTime();
//console.log(futureTime);

//console.log(today);
function getremainingTime(){
  const today=new Date().getTime();
const t=futureTime-today;
//values in ms
const oneDay=24*60*60*1000;
const oneHour=60*60*1000;
const oneMinute=60*1000;

let days=t / oneDay ;
days=Math.floor(days);
let hours=Math.floor((t % oneDay)/oneHour);
let minutes=Math.floor((t %  oneHour)/oneMinute);
let seconds=Math.floor((t % oneMinute)/1000);


const values=[days,hours,minutes,seconds];
function format(item){
  if(item < 10){
    return(item=`0${item}`);

  }
  return item;
}

items.forEach(function(item,index) {
   item.innerHTML=format(values[index]);
});

if (t < 0) {
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class="expired">sorry, this offer has expired</h4>`;
}

}
let countdown=setInterval(getremainingTime,1000);
getremainingTime();





