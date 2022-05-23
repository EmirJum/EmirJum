const som = document.querySelector("#som");
const usd = document.querySelector("#usd");

// som.addEventListener("input", () => {
// 	const  reqest = new XMLHttpRequest();
// 	reqest.open("GET", "data.json");
// 	reqest.setRequestHeader("Content-type", "application/json");
// 	reqest.send();
// 	reqest.addEventListener("load", ()=> {
// 		const response = JSON.parse(reqest.response);
// 		usd.value = (som.value/ response.usd).toFixed(2);
// 	});
	
// });
const covert = (elem, target, isTrue) => { 
		elem.addEventListener("input",() => { 
				const reqest = new XMLHttpRequest() 
				reqest.open("GET", "data.json") 
				reqest.setRequestHeader("Content-top", "application/json") 
				reqest.send() 
				reqest.addEventListener("load", () =>{ 
						const response = JSON.parse(reqest.response) 
						if (isTrue){ 
								target.value = (elem.value / response.usd).toFixed(2) 
						} else { 
							target.value = (elem.value * response.usd).toFixed(2) 
						} 
						elem.value === "" ? (target.value = "") : null; 
				}); 
		}); 
}; 
covert(som, usd, 12);
covert(usd, som);