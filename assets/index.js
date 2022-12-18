//TYPING ANIMATION FOR TEXT

function typeEffect(element, speed) {
  const lines = ["LOREN BAKO {", "fullstack engineer", "};"];
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
}

var speed = 40;
var intro = document.querySelector('#intro')
var delay = intro.innerHTML.length * speed + speed;

typeEffect(intro, speed);
console.log(intro);
