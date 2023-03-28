let elem = document.getElementById('clicker__counter').innerHTML;
let images = document.getElementsByTagName("img");

cookie.onclick = function() {
    elem++;
    document.getElementById("clicker__counter").innerHTML = elem;
    console.log("elem = "+elem);
  };


let started, resetTimeoutHandle, resetTimeout = 1000,
container = document.getElementById('clicker'),
counter = document.getElementById('speedClick'),
zone = document.getElementById('cookie'),
clicks = 0;

zone.onseclect = zone.onselectstart = function() {
  return false;
};

function clicksPerSecond(started, clicks) {
  return clicks / ((new Date()) - started) * 1000;
}

function count() {
  clearTimeout(resetTimeoutHandle);
  clicks++;
  counter.innerText = (parseInt(clicksPerSecond(started, clicks) * 100)) / 100;
  resetTimeoutHandle = setTimeout(reset, resetTimeout);
  return false;
}

function start() {
  started = new Date();
  clicks = 0;
  this.onmousedown = count;
  this.onmousedown();
  return false;
}

function reset() {
  zone.onmousedown = start;
}

reset();