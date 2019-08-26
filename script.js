// Exercice 1
 
var footer =  document.getElementsByTagName("footer")[0];
var count = 1

footer.addEventListener("click", function() {
  var x = 
  console.log("clic n°" + count)
  count ++
});


// Exercice 2

var navbarHeader = document.getElementById("navbarHeader");
var navBtn = document.querySelector(".navbar-toggler-icon");
navBtn.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse");
});


// Exercice 3

var textCard = document.querySelectorAll(".card-body p");
var editBtn = document.querySelectorAll(".card .btn") ;   //Pas compris pourquoi ce .card .btn fonctionnait, car ne l'ai pas trouvé ds le html..
editBtn[1].addEventListener("click", function() {
  textCard[0].style.color = "red" ;
});


// Exercice 4

textCard[1].style.color = 'black'
editBtn[3].addEventListener("click", function() {
if (textCard[1].style.color === 'green'){ 
  textCard[1].style.color = '' ; 
  }else
  textCard[1].style.color = 'green';
});


// Exercice 5

var header = document.getElementsByTagName("header")[0];
var headerOnClick = function() {
  if(document.styleSheets[0].disabled==false) {
    document.styleSheets[0].disabled=true;
  } else {
    document.styleSheets[0].disabled=false;
  }
}
header.addEventListener("dblclick", headerOnClick);
