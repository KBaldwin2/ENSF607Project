
console.log("Testing GET");
let fetched = fetch("https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments?per_page=1")
.then(response => json_data = response.json())
.then(data =>  data[0]['id']);

//need to return inside a function
const printData = async () => {
    const value = await fetched;
    alert(value);
};

printData();


