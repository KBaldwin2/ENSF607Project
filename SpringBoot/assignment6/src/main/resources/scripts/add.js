console.log("add.js");

//Receives course information entered and sends it to server
    //Two possible messages received back:
    //1. Success! Course has been added.
    //2. Cannot add course - student already in 6 courses.

const course = document.getElementById('menu');

// menuForm.addEventListener('submit', function(evt) {
//     evt.preventDefault();
//     console.log('register button pressed');
    
//     //Creates a [key,value] for each radio button and pulls the value on submit
//     const data = new FormData(menuForm);
//     let menuOption = "";
//     for(let output of data) {
//          //prints output as [key, value]
//         //so output[1] = name of selected option
//         console.log(output[1]);
//         menuOption = output[1];
//     }
// });