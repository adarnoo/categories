let root = document.documentElement;
let imageContainer = document.getElementById("moving-around");

imageContainer.addEventListener("mousemove", e => {
  console.log(e);
  root.style.setProperty('--mouse-x', e.pageX - imageContainer.offsetLeft + "px");
  root.style.setProperty('--mouse-y', e.pageY - imageContainer.offsetTop + "px");
});

function showTwink() {
  var element = document.getElementById("twink-container");
  element.classList.toggle("sm-twink-images-container--show");
}

function showBear() {
  var element = document.getElementById("bear-container");
  element.classList.toggle("sm-bear-images-container--show");
}

function showJock() {
  var element = document.getElementById("jock-container");
  element.classList.toggle("sm-jock-images-container--show");
}
