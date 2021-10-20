(function() {
  let root = document.documentElement;
  let imageContainer = document.getElementById("moving-around");

  let twinkBtn = document.getElementById("twink-button");
  let bearBtn = document.getElementById("bear-button");
  let jockBtn = document.getElementById("jock-button");

  imageContainer.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.pageX - imageContainer.offsetLeft + "px");
    root.style.setProperty('--mouse-y', e.pageY - imageContainer.offsetTop + "px");
  });

  twinkBtn.addEventListener("click", e => {
    var element = document.getElementById("twink-container");
    element.classList.toggle("sm-twink-images-container--show");
  });

  bearBtn.addEventListener("click", e => {
    var element = document.getElementById("bear-container");
    element.classList.toggle("sm-bear-images-container--show");
  });

  jockBtn.addEventListener("click", e => {
    var element = document.getElementById("jock-container");
    element.classList.toggle("sm-jock-images-container--show");
  });
})();
