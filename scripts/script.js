/* menu openen */

var openButton = document.querySelector("header > button");

openButton.addEventListener("click", menuOpenen);

function menuOpenen() {
  var deNav = document.querySelector("header > nav");

  deNav.classList.add("open");
}

/* menu sluiten */
var sluitButton = document.querySelector("header nav button");

sluitButton.addEventListener("click", menuSluiten);

function menuSluiten() {
  var deNav = document.querySelector("header > nav");

  deNav.classList.remove("open");
}

// FLOEP FLAP van SANNE
// eerste uitklapmenu met forum hulp nog niet eruit gekomen
var deEersteButton = document.querySelector("section:nth-of-type(3) button");

deEersteButton.addEventListener("click", toggleEersteMenu);

function toggleEersteMenu() {
  var hetEersteMenu = document.querySelector("section:nth-of-type(3)");
  hetEersteMenu.classList.toggle("open");
}
