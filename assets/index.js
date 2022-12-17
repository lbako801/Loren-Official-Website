//TYPING ANIMATION FOR TEXT

function typeEffect(element, speed) {
	var text = element.innerText;
	element.innerText = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

var speed = 40;
var h1 = document.querySelector('h1')
var delay = h1.innerHTML.length * speed + speed;

typeEffect(h1, speed);
