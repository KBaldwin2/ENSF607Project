console.log("add.js");

let currentStudent = sessionStorage.getItem("studentId");
console.log(currentStudent);

//Disable section until course chosen

window.addEventListener('load', async function (evt) {
    evt.preventDefault();

    idList = await load_course_list(getAllCoursesAPI);
    let courseIds = document.getElementById('courseIdList'), id=idList;
    //Iterate through courseIds list and add each as an option in form
    for(let i = 0; i < idList.length; i++) {
        let option = document.createElement("OPTION"),
                    txt = document.createTextNode(idList[i]);
        option.appendChild(txt);
        courseIds.insertBefore(option, courseIds.lastChild);
    }
});

const courseForm = document.getElementById("CourseList");
courseForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    // idList = await loadSectionList(api);
    idList = ["1", "2", "3"]
    let sections = document.getElementById('courseSectionList'), id=idList;
    for(let i = 0; i < idList.length; i++) {
        let option = document.createElement("OPTION"),
                    txt = document.createTextNode(idList[i]);
        option.appendChild(txt);
        sections.insertBefore(option, sections.lastChild);
    }

});


//TO DO: Set up section
//TO DO: Add actionEventListeners for adding courses