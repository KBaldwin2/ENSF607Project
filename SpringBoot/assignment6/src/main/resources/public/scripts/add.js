console.log("add.js");

let currentStudent = sessionStorage.getItem("studentId");
console.log(currentStudent);

window.addEventListener('load', async function (evt) {
    evt.preventDefault();
    console.log('Add page selected');

    idList = await load_course_list(getAllCoursesAPI);
    console.log(idList);
    let courseIds = document.getElementById('courseIdList'), id=idList;
    //Iterate through courseIds list and add each as an option in form
    for(let i = 0; i < idList.length; i++) {
        let option = document.createElement("OPTION"),
                    txt = document.createTextNode(idList[i]);
        option.appendChild(txt);
        courseIds.insertBefore(option, courseIds.lastChild);
    }
});


//TO DO: Set up section
//TO DO: Add actionEventListeners for adding courses