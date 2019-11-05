function showTime(){
  var date = new Date();
  var y = date.getUTCFullYear() - 2001;
  var mt = date.getUTCMonth()-5;
  var d = date.getUTCDate();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  var time = y+" years "+mt+" months "+d+" days "+h+" hours "+m+" minutes "+s+" seconds";

  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
}

setInterval(showTime, 1000);

document.querySelector('html').onclick = function() {
var myImage = document.querySelector('img');


}