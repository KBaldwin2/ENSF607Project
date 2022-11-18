//This is a general js file that should be included in all html files for functions used across all pages

console.log('index');

//TODO: Figure out how to get the hard coded IP out of this
//Load new html address
function load_page(htmlFile) {
    window.location.href = "http://127.0.0.1:5500/ENSF607Project/"+htmlFile;
}

//post to server
//TEST API -> https://regres.in/api/users
//the format of data needs to be {key: [value1, value2]}

function postFetch(api, data) {
    //fetch post
    fetch(api, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({
            data
        })
    }).then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        //add a return data
    })
}

//get from server
//the format of data needs to be {key: [value1, value2]}
function getFetch(api, data) {
    //fetch get
    fetch(api)
}

//Delete from server
//the format of data needs to be {key: [value1, value2]}
function deleteFetch(api, data) {
    //fetch delete
    fetch(api, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({
            data
        })
    }).then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        //add a return data
    })
}




