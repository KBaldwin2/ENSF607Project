console.log('loadCourseList');

async function load_course_list() {
    let courseList = await getFetch(getAllStudentsAPI);
    return courseList;
}


idList = ["ensf500", "ensf600"];
let courseIds = document.getElementById('courseIdList'), id=idList;
//Iterate through courseIds list and add each as an option in form
for(let i = 0; i < idList.length; i++) {
    let option = document.createElement("OPTION"),
                txt = document.createTextNode(idList[i]);
    option.appendChild(txt);
    courseIds.insertBefore(option, courseIds.lastChild);
}



