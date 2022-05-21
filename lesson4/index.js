
// const obj = {
// 	name: "john",
// 	age: "20"
// }
// console.log(obj);
// const data = JSON.stringify(obj);
// console.log(data);

// console.log(JSON.parse(data));

const btn = document.querySelector(".btn")



btn.addEventListener("click", () => {
	const request = new XMLHttpRequest();
	request.open("GET", "data.json");
	request.setRequestHeader("Content-type", "application/json");
	request.send();
	request.addEventListener("load", () => {
		const data = JSON.parse(request.response);
		console.log(request.response);
	});
})


