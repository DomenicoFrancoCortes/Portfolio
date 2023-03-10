const firebaseConfig = {
  apiKey: "AIzaSyA730K40MftsYo64JT81cv1UvCJh8oc_-s",
  authDomain: "portfolio-dbd0c.firebaseapp.com",
  databaseURL: "https://portfolio-dbd0c-default-rtdb.firebaseio.com",
  projectId: "portfolio-dbd0c",
  storageBucket: "portfolio-dbd0c.appspot.com",
  messagingSenderId: "209860069367",
  appId: "1:209860069367:web:df74efd2e1e32d80bdd0f2"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactoFormulario");

document.getElementById("contactoFormulario").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");





  if (name.length == 0 || emailid.length == 0 || msgContent == 0) {
    document.querySelector(".alert2").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert2").style.display = "none";

    }, 3000);
    document.getElementById("contactoFormulario").reset();
  } else {
    saveMessages(name, emailid, msgContent);
    document.querySelector(".alert").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
    document.getElementById("contactoFormulario").reset();
  }


}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// menu desplegable y efecto paralax 
document.getElementById("icono-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {

  document.querySelector(".menu").classList.toggle("mostrar_menu");


}

window.onscroll = function () {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var elemento1 = document.getElementById("icono");
  var elemento2 = document.getElementById("icon_fire");
  elemento1.style.bottom = posicion * 0.1 + "px";
  elemento2.style.top = posicion * 0.1 + "px";
}