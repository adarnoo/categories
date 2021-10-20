(function() {
  let root = document.documentElement;
  let imageContainer = document.getElementById("moving-around");

  let twinkBtn = document.getElementById("twink-button");
  let bearBtn = document.getElementById("bear-button");
  let jockBtn = document.getElementById("jock-button");

  var twinkContainer = document.getElementById("twink-container");
  var bearContainer = document.getElementById("bear-container");
  var jockContainer = document.getElementById("jock-container");

  // imageContainer.addEventListener("mousemove", e => {
  //   root.style.setProperty('--mouse-x', e.pageX - imageContainer.offsetLeft + "px");
  //   root.style.setProperty('--mouse-y', e.pageY - imageContainer.offsetTop + "px");
  // });

  // Add images showing when u click on buttons
  twinkBtn.addEventListener("click", e => {
    twinkContainer.classList.add("sm-twink-images-container--show");
  });
  bearBtn.addEventListener("click", e => {
    bearContainer.classList.add("sm-bear-images-container--show");
  });
  jockBtn.addEventListener("click", e => {
    jockContainer.classList.add("sm-jock-images-container--show");
  });

  // Remove images showing when u click on image layers
  twinkContainer.addEventListener("click", e => {
    twinkContainer.classList.remove("sm-twink-images-container--show");
  });
  bearContainer.addEventListener("click", e => {
    bearContainer.classList.remove("sm-bear-images-container--show");
  });
  jockContainer.addEventListener("click", e => {
    jockContainer.classList.remove("sm-jock-images-container--show");
  });
})();
