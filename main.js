const musicButton = document.getElementById('music-button'),
      path = document.getElementById('path'),
      circle = document.getElementById('circle')

let current = true;
musicButton.addEventListener('click',()=>{
  if(current){
    path.style.animation = "animatePath 0.3s ease-in forwards"
    circle.style.animation = "animateCircle 0.5s ease-in forwards"
    current = false;
  }
  else {
    path.style.animation = "animatePathReverse 0.3s ease-in forwards"
    circle.style.animation = "animateCircleReverse 0.3s ease-in forwards"
    current = true;
  }

})
