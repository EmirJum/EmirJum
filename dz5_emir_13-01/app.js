const som = document.querySelector("#som");
const euro = document.querySelector("#euro");
const usd = document.querySelector("#usd");

// som.addEventListener("input", ()=> {
// 	const reqest = new XMLHttpRequest();
// 	reqest.open("GET", "data.json");
// 	reqest.setRequestHeader("Content-type", "application/json");
// 	reqest.send();
// 	reqest.addEventListener("load", ()=> {
// 		const response = JSON.parse(reqest.response);
// 		euro.value = (som.value / response.euro).toFixed(2);
// 	});
// });


const convert = (elem, target, isTrue,)=> {
	elem.addEventListener("input", ()=> {
		const reqest = new XMLHttpRequest();
	reqest.open("GET", "data.json");
	reqest.setRequestHeader("Content-type", "application/json");
	reqest.send();
	reqest.addEventListener("load", ()=> {
		const response = JSON.parse(reqest.response);
		if(isTrue){
			target.value = (elem.value / response.euro).toFixed(2);
		}else {
			target.value = (elem.value * response.euro).toFixed(2);
		};
		elem.value === "" ? (target.value = "") : null;
	});
	});
};

convert(som, euro, 12);
convert(euro, som);

const fantom = (ulum, target, olTrue,)=> {
	ulum.addEventListener("input", ()=> {
		const reqest = new XMLHttpRequest();
	reqest.open("GET", "app.json");
	reqest.setRequestHeader("Content-type", "application/json");
	reqest.send();
	reqest.addEventListener("load", ()=> {
		const response = JSON.parse(reqest.response);
		if(olTrue){
			target.value = (ulum.value / response.usd).toFixed(2);
		}else {
			target.value = (ulum.value * response.usd).toFixed(2);
		};
		ulum.value === "" ? (target.value = "") : null;
	});
	});
};

fantom(som, usd, 13);
fantom(usd, som);