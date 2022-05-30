const request = new XMLHttpRequest();
		request.open("POST", 'server.php');
		request.setRequestHeader("Content-type", "application/json");

		const formData = new FormData(form);
		const obj = {};
		formData.forEach((item, i)=> {
			object[i] = item;
		});
		const json = JSON.stringify(object);

		request.send(json);

    request.addEventListener("load", ()=> {
			if(request.status === 200){
				consolo.log(request.response);
				massageBlock.textContent = massage.success;
			}else {
				massageBlock.textContent = massage.fail;
			}
		});
    const forms = document.querySelector("form");
const request = new XMLHttpRequest();
		request.open("POST", 'server.php');
		request.setRequestHeader("Content-type", "application/json");

		const formData = new FormData(form);
		const obj = {};
		formData.forEach((item, i)=> {
			object[i] = item;
		});
		const json = JSON.stringify(object);

		request.send(json);

    request.addEventListener("load", ()=> {
			if(request.status === 200){
				consolo.log(request.response);
				massageBlock.textContent = massage.success;
			}else {
				massageBlock.textContent = massage.fail;
			}
		});

const massage = {
	loading: "идет загрузка...",
	success: "спасибо, скоро свяжимся",
	fail: "что то пошло не так",
};

forms.forEach((item)=> {
	postData(item);
});
const postData = (form) => {
	form.addEventListener("submit", (e)=> {
		e.preventDefault();

		const massageBlock = document.createElement("div");
		massageBlock.textContent = massage.loading;
		form.append(massageBlock);

fetch("server.php", {
	method: "POST",
	headers: {
		"Content-type": "application/json",
	},
	body: JSON.stringify(object)
})
	.then((response)=> response.text())
	.then((postData)=> {
		success: "спасибо, скоро свяжимся",
	})
	.catch(()=> {
		fail: "что то пошло не так",
	})
	.finally(()=> {
		loading: "идет загрузка...",
	})