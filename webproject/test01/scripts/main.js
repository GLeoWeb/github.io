// main.js
// 1. Insertar un texto en el documento en etiqueta <h2>
const oDocH2 = document.querySelector('h2');
oDocH2.textContent = 'Mi primer Java Script';

// Jugar con las imagenes. Al presionar click del mouse sobre la imagen,
// se intercambian las imagenes 1 y 2.
let myImage = document.querySelector('img');

 myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/BusTransp1.jpg') {
      myImage.setAttribute('src','images/BusTransp2.jpg');
    } else {
      myImage.setAttribute('src','images/BusTransp1.jpg');
    }
}

// Solicita el nombre y lo ubica en la etiqueta <h2>
// oButton se comporta como un objecto(le anteponenos la 'o' para indicar que es un objecto.
let oButton = document.querySelector('button');

// Definimos la función setUserName
function setUserName() {
  let sName = prompt('Please enter your name.');
  if(!sName) 
     sName = '***Sin Nombre***'; 

  // localStorage es un área de memoria temporarl del documento. 
  localStorage.setItem('name', sName);
  oDocH2.textContent = 'Mozilla is cool, ' + sName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  oDocH2.textContent = 'Mozilla is cool, ' + storedName;
}

// Asignamos el evento "onClick" al botón para que reaccione al botón izquierdo del Mpuse.
oButton.onclick = function() {
  setUserName();
}
