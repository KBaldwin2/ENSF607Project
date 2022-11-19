
// console.log("Testing GET");
// let fetched = fetch("https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments?per_page=1")
// .then(response => json_data = response.json())
// .then(data =>  data[0]['id']);

// //need to return inside a function
// const printData = async () => {
//     const value = await fetched;
//     alert(value);
// };

// printData();

console.log("test fetch");
let fetched = fetch("http://localhost:8080/api/v1/student")
    .then(response => response.json())
    .then(data => alert(data[0]['username']));


