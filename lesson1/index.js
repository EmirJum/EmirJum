// // let string = prompt('your name');
// let string = '121212232323'

// // let regularExp = /y/gi;
// let regularExp = /\d/;

// // const regularExp2 = new  RegExp('y', )

// console.log(string.match(regularExp));
// const phoneInput = document.querySelector('.phoneInput');
// const phoneClick = document.querySelector('.phoneClick');
// const phoneResult = document.querySelector('.phoneResult');
// console.log(phoneInput);
// const phoneReg = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneClick.addEventListener('click', () => {
// 	if(phoneReg.test(phoneInput.value)){
// 		phoneResult.innerText = "ok";
// 		phoneResult.style.color = 'green';
// 	}else{
// 		phoneResult.innerText = "not ok";
// 		phoneResult.style.color = 'red';
// 	}
// });

// const letter = "1frfrf23123frffrfrff12fr3";

// const regularExp = /\w/g;
// console.log(letter);
// console.log(letter.replace(regularExp, "*"));

// let num = 0;

// const count = () => {
// 	num++;
// 	console.log(num);
// 	if (num < 50){
// 		return count();
// 	}
// };

// count();
const people = { 
  John: { 
    age: 25, 
    parents: { 
      Kelly: { 
        age: 45, 
      }, 
      Tony: { 
        age: 45, 
      }, 
    }, 
  }, 
  Sam: { 
    age: 15, 
    parents: { 
      Jean: { 
        age: 35, 
      }, 
    }, 
		Kelly: { 
			age: 45, 
		}, 
		Tony: { 
			age: 45, 
		}, 
  }, 
};

const parentsList = (obj) => {
	if(obj.parents){
		for(let key in obj.parents){
			console.log(key);
			parentsList(obj.parents[key]);
		}
	}
};