console.log("coursecatalogue.js");

let catalogue = document.getElementById('allcourseinfo');

window.addEventListener('load', async function (evt){
    evt.preventDefault();
    console.log('Course catalogue page selected');

    console.log("test fetch");

    var apiString = getAllCourses();
    var apiResponse = await getFetch(apiString);
    console.log(apiResponse);
    if(apiResponse.length == 0){
        catalogue.innerHTML = "No courses found";
        return -1;
    }
    var formattedOutput = ""

    //I have not been able to test the outputs.
    for(var i = 0; i < apiResponse.length; i++){
        formattedOutput += i + 1 + ")" + apiResponse[i] + "\n"
    }
    catalogue.innerHTML = formattedOutput
});