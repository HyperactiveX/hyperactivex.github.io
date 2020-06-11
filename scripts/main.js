/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "50vw";
  document.getElementById("main").style.marginLeft = "50vw";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}


// function myFunction(x) {
//   if (x.matches) { // If media query matches
//       document.body.style.width = '360px';
//   } else {
//       document.body.style.width = 'auto';
//   }
// }

// var x = window.matchMedia("(max-width: 360px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

