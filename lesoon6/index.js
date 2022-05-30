// setTimeout(()=> {
//   console.log("подготовка данных...");
//   const product = {
//     name: "phone",
//     price: 4000,
//   };
//   setTimeout(()=> {
//     product.status = "ordered";
//     console.log(product);
//   }, 2000);
// }, 2000);

// console.log("отправка данных...")

// const req = new Promise((resolve, reject)=> {
//   setTimeout(()=> {
//   console.log("подготовка данных...");
//   const product = {
//     name: "phone",
//     price: 4000,
//    };

//    resolve(product)
//  }, 2000);
// });

// const resolveData = (product) => {
//     setTimeout(()=> {
//     product.status = "ordered";
//     console.log(product);
//   }, 2000);
// };

// req.then((product)=> {
//   const req2 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//     product.status = "ordered";
//     console.log(product);

//     resolve();
//   }, 2000);
//   });
//   req2.then(()=> {
//     product.isModefied = true;
//     console.log(product,"2")
//   })
// });




// const req = new Promise((resolve, reject)=> {
//   setTimeout(()=> {
//   console.log("подготовка данных...");
//   const product = {
//     name: "phone",
//     price: 4000,
//    };

//    resolve(product)
//  }, 2000);
// });
// req.then((product)=> {
//   return new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//     product.status = "ordered";
//     console.log(product, "1");
//     // resolve(product);
//   }, 2000);
//   });
// }).catch(()=> {
//   console.log("ошибочка");
// }).finally(()=> {
//   console.log("операция завершина");
// })

// .then((product)=> {
//   product.isModified = true;
//   console.log(product, "2")
// })

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))




