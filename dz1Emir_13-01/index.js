const gumInput = document.querySelector(".gumInput");
const gumButton = document.querySelector(".gumButton");
const gumResult = document.querySelector(".gumResult");
// console.log(gumInput)
// console.log(gumButton)
const inReg = /^1\d{13}|2\d{13}$/;
gumButton.addEventListener("click", () => {
	if(inReg.test(gumInput.value)){
		console.log("hello")
		alert("Hello")
	}else{
		console.log("bye")
		alert("bye")
	}
});

const kolega = document.querySelector(".krug")
let num = 0;

const move = function() {
    num += 20
    kolega.style.left = `${num}px`;
    if (num < 300) {
        move();
    } else {
        num = 0
    }
}

kolega.addEventListener("mousedown", move)