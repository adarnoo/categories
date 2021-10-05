let root = document.documentElement;
let imageContainer = document.getElementById("moving-around");

imageContainer.addEventListener("mousemove", e => {
  console.log(e);
  root.style.setProperty('--mouse-x', e.pageX - imageContainer.offsetLeft + "px");
  root.style.setProperty('--mouse-y', e.pageY - imageContainer.offsetTop + "px");
});
