//Your code goes here

// 1. Click the button to display your name
let myName = document.querySelector("#myName");
let btnName = document.querySelector("#btnName");
//Selectors
btnName.addEventListener("click", displayName);

//Function
function displayName(){
}

//Call the event

//2. Switch lights on mouseover
let imgSec = document.querySelector("#imgSec");
let imageOff = document.querySelector("#imageOff");
//Selectors
imageOff.addEventListener("mouseover", switchLights);
//Function
function switchLights(){
}

//Call the event

//3. Double click to display content
let btndbName = document.querySelector("#btndbName");
let displayPara = document.querySelector("#displayPara");
//Selectors
displayPara.addEventListener("dblclick", displayContent);
/*Function {
  //some code here
  //create a new img element
}*/
function displayContent(){
}

//Call the event

// 4. Traffic Lights
let btnStop = document.querySelector("#btnStop");
let dbtnReady = document.querySelector("#btnReady");
let btnGo = document.querySelector("#btnGo");
//Selectors
btnStop.addEventListener("click",redLight);
dbtnReady.addEventListener("click",yellowLight);
btnGo.addEventListener("click",greenLight);
//Function 1
function redLight(){
}
//Function 2
function yellowLight(){
}
//Function 3
function greenLight(){
}
//Call the events

//5. Change textbox border colours
let firstNam = document.querySelector("#firstNam");
let lastName = document.querySelector("#lastName");
let btn2Name = document.querySelector("#btn2Name");
//Selectors

//Selectors
btn2Name.addEventListener("click", borderColours);
//Function
function borderColours(){
}
//Call the event

//6. validate the box [length should be more than 5 characters]
let errMsg = document.querySelector("#errMsg");
let myName2 = document.querySelector("#myName2");
let btnSub2 = document.querySelector("#btnSub2");
//Selectors
btnSub2.addEventListener("click", validateBox);
/*Function {
  //if statement
}*/
function validateBox () {
}
//Call the event

// 7.create a list of hobbies
let btnHobbies = document.querySelector("#btnHobbies");
//Selectors
btnHobbies.addEventListener("click", hobList);
/*Function {
  //for loop
}*/
function hobList(){
}
//Call the event

// 8. Display a profile card from an object
//Object
const profile = {
  name: "",
  role: "",
  hobbies: "",
};

//Selectors

/*Function {
    //for loop
      //if statement
  }*/
