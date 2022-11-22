console.log("add.js");

window.addEventListener('load', async function (evt) {
    evt.preventDefault();
    console.log('Add page selected');

    idList = await load_course_list(getAllCoursesAPI, 'ucid');
    let courseIds = document.getElementById('courseIdList'), id=idList;
    //Iterate through courseIds list and add each as an option in form
    for(let i = 0; i < idList.length; i++) {
        let option = document.createElement("OPTION"),
                    txt = document.createTextNode(idList[i]);
        option.appendChild(txt);
        courseIds.insertBefore(option, courseIds.lastChild);
    }
});