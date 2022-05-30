// const cityName = document.querySelector(".cityName");
// const temp = document.querySelector(".temp");


// const apiKey = "e417df62e04d3b1b111abeab19cea714";

// function citySearch() {
//   const cityNameValue = document.querySelector('.cityNameValue').value;
//   console.log(cityNameValue);
//   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`).then(function(resp){
//     return resp.json();
//   }).then(function(data){
//     console.log(data);
//     temp.innerHTML = Math.round(data.main.temp - 273) + "$deg" + "C";
//     cityName.innerHTML = data.name;
//   })
// }


// const delay = (ms)=> {
//   return new Promise((r)=> setTimeout(()=> r(), ms));
// };

// const url = "";

// function fetchData() {
//   console.log("start");
//   return delay(200)
//   .then(()=> fetch(url))
//   .then((response)=> response.json());
// }

// fetchData().then((data)=> {
//   console.log(data, "data")
// })
// .catch((e)=> console.error(e));


const fetchData = async () => {
  console.log("start");
  try{
    await delay(200)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data, "data");
  } catch(e) {
    console.error(e);
  }
};
fetchData();