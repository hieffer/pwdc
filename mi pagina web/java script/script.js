//alert("Hola este es mi Javascript");

//let nombre = "leo";
//nombre = "maria";

//var nombre1 = "leo";

//const nombre2 = "leo";
//nombre2 = "maria"

//console.log(nombre)
//console.log(nombre1)
//console.log(nombre2)

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};