//This is a general js file that should be included in all html files for functions used across all pages

console.log('index');

//All api endpoints
const getAllStudentsAPI = "http://localhost:8080/api/v1/student";
const addStudentAPI = "http://localhost:8080/api/v1/student";


//Load new html address
function load_page(htmlFile) {
    window.location.href = "http://localhost:8080/"+htmlFile;
}

//post to server
//TEST API -> https://regres.in/api/users
//the format of data needs to be {key: [value1, value2]}

function postFetch(api, data) {
    //fetch post
    return fetch(api, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        } ,
        body: JSON.stringify(
            data 
        )
    }).then(response => {
        response.json();
    })
    .then(data => {
        data;
    })
}


//get from server
//returns data to console and can be used with an async/await function
function getFetch(api) {
    return fetch(api)
            .then(response => response.json())
            .then(data => data);
}

//Delete from server
//the format of data needs to be {key: [value1, value2]}
function deleteFetch(api, data) {
    //fetch delete
    return fetch(api, {
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

function searchStudent(id) {
    getFetch(getAllStudentsAPI)
    .then(studentList => {studentList.find(student => 
                          {
                            console.log(student['ucid']);
                            if(student['ucid'] == id) {
                                console.log("ID FOUND");
                                return true;
                            }
                            return false; 
                            }
                            )
                        return true
                    });
}


