(function() {
  let root = document.documentElement;
  let imageContainer = document.getElementById("moving-around");

  let twinkBtn = document.getElementById("twink-button");
  let bearBtn = document.getElementById("bear-button");
  let jockBtn = document.getElementById("jock-button");
  let linksBtn = document.getElementById("links-button");

  var twinkContainer = document.getElementById("twink-container");
  var bearContainer = document.getElementById("bear-container");
  var jockContainer = document.getElementById("jock-container");
  var linksContainer = document.getElementById("links-container");

  let twinkInnerContainer = twinkContainer.getElementsByClassName('js-moving-around')[0];
  let bearInnerContainer = bearContainer.getElementsByClassName('js-moving-around')[0];
  let jockInnerContainer = jockContainer.getElementsByClassName('js-moving-around')[0];

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
  linksBtn.addEventListener("click", e => {
    linksContainer.classList.add("sm-links-images-container--show");
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
  linksContainer.addEventListener("click", e => {
    linksContainer.classList.remove("sm-links-images-container--show");
  });

  function movingAround (container, e) {
    root.style.setProperty('--mouse-x', e.pageX - container.offsetLeft + "px");
    root.style.setProperty('--mouse-y', e.pageY - container.offsetTop + "px");
  }

  // Moving images mousemove animation
  twinkInnerContainer.addEventListener("mousemove", e => {
    movingAround(twinkInnerContainer, e);
  });
  bearInnerContainer.addEventListener("mousemove", e => {
    movingAround(bearInnerContainer, e);
  });
  jockInnerContainer.addEventListener("mousemove", e => {
    movingAround(jockInnerContainer, e);
  });
  linksInnerContainer.addEventListener("mousemove", e => {
    movingAround(jockInnerContainer, e);
  });

})();
