//This is a general js file that should be included in all html files for functions used across all pages

console.log('index');


//All api endpoints
const getAllStudentsAPI = "http://localhost:8080/api/v1/student";
const addStudentAPI = "http://localhost:8080/api/v1/student";
const getAllCoursesAPI = "http://localhost:8080/api/v1/course";
const addNewCourse = "http://localhost:8080/api/v1/course";

//Load new html address
function load_page(htmlFile) {
    window.location.href = "http://localhost:8080/" + htmlFile;
}


function postFetch(api, data) {
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            data
        )
    })
}

//get from server
async function getFetch(api) {
    let response = await fetch(api);
    return response.json();
}

//Delete from server - should not need this**
function deleteFetch(api, data) {
    //fetch delete
    return fetch(api, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
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




