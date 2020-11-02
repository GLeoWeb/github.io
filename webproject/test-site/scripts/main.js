// main.js
let myImage = document.querySelector('img');

 myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/BusTransp1.jpg') {
      myImage.setAttribute('src','images/BusTransp2.jpg');
    } else {
      myImage.setAttribute('src','images/BusTransp1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) 
     myName = '***Sin Nombre***'; 

  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}