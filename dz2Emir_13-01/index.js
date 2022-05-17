const main_box = document.querySelector(".main_box");
const box2 = document.querySelector(".box2");

let yPos = 0;
let xPos = 0;

function move() {
	if(xPos < 340 && yPos == 0) {
		xPos += 16;
		box2.style.left = `${xPos}px`;
		setTimeout(() => {
			move();
		}, 160);
	}  else if (xPos >= 340 && yPos < 340 ) {
		yPos += 16;
		box2.style.top = `${yPos}px`;
		setTimeout(() => {
			move();
		}, 160);
	}  else if (xPos > 0 && yPos >= 340) {
		xPos -= 16;
		box2.style.left = `${xPos}px`;
		setTimeout(() => {
			move();
		}, 160)
	} else if (xPos == 0 && yPos > 0) {
		yPos -= 16;
		box2.style.top = `${yPos}px`;
		setTimeout(() => {
			move();
		}, 160)
	}
}
move()