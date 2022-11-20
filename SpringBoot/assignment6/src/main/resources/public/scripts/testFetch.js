
// console.log("Testing GET");
// let fetched = fetch("https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments?per_page=1")
// .then(response => json_data = response.json())
// .then(data =>  data[0]['id']);

//How to use data from a Promise
// const printData = async () => {
//     const value = await fetchFunction();
//     value is the data that is outputted by fetchfunction() and can be used however
//  
// };

// printData();

console.log("test fetch");
let fetched = fetch("http://localhost:8080/api/v1/student")
    .then(response => response.json())
    .then(data => alert(data[0]['username']));


