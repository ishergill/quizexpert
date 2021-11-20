// ---------------------->>>>>>>>>SLIDER
var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slide = document.getElementsByClassName("slides");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}    
  slide[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}

// -----------------------------------------COUNTDOWNTIMER
const countDownDate = new Date("Dec 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
 let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime()
  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById('time').innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('time').innerHTML = "in progress";
  }
}, 1000);
