//TYPING ANIMATION FOR INTRO TEXT

function typeEffect(element, speed) {
  const lines = ["Loren Bako {", "FULLSTACK ENGINEER", "};"];
  let lineToUse = 0;

	element.innerText = "";
	
	let i = 0;
	var timer = setInterval(function() {
    if(lineToUse > lines.length - 1) {
      return clearInterval(timer);
    }

    // Go to next line
    if( i >= lines[lineToUse].length) {
      element.innerText = element.innerText + '\n';
      if(lineToUse === 0) {element.appendChild(document.createTextNode( '\u00A0\u00A0' ));}
      lineToUse++;
      i = 0;
      return;
    }

    if (i < lines[lineToUse].length) {
      element.append(lines[lineToUse].charAt(i));
      
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

var speed = 25;
var intro = document.querySelector('#intro');
var delay = intro.innerHTML.length * speed + speed;

typeEffect(intro, speed);

console.log("Aren't you a curious one...");

//FORM VALIDATON FOR EMAIL FORM

// const email = document.getElementById('email');
// const messageBox = document.getElementById('message-box');
// const form = document.getElementById('contact-form-id');
// const errorMailElement = document.getElementById('error - mail');
// const errorMessageElement = document.getElementById('error-message-box');
// const errorForm = document.getElementById('error-form')

// form.addEventListener('submit', (e) => {
  
//   if (email.value === '' || email.value === null) {
//     errorMailElement.style.display === "block";
//     e.preventDefault;
//   }

//   if (messageBox.value === '' || messageBox.value === null) {
//     errorMessageElement.style.display === "block";
//     e.preventDefault;
//   }

//   if (messageBox.value && email.value === '' || messageBox.value && email.value === null) {
//     errorForm.style.display === "block";
//     e.preventDefault;
//   }
// });

// PLAY CLICK AUDIO

// var play = document.getElementsByClassName('click-audio');

// function playClick() {
//   let audio = New Audio('../assets/sounds/mixkit-single-classic-click-1116.wav');
//   audio.play()
// };

// play.addEventListener('click', playClick);