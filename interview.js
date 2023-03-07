const zoomable = document.querySelectorAll(".content-with-images-img-overlay");
const zoomableImages = [];
const popupContainer = document.getElementById("popup-container");
let popupContent;

zoomable.forEach(function (overlay) {
  zoomableImages.push(overlay.nextSibling.nextSibling.src);
  overlay.addEventListener("click", function (e) {
    openImages(e.currentTarget.nextSibling.nextSibling.src);
  });
});

function openImages(current) {
  let currentId = zoomableImages.indexOf(current);
  popupContainer.innerHTML = `<div class="popup">
<div class="popup-header">
<div class="popup-controls">
<button class="btn popup-btn" id="popupPrev" title="Previous Image"><i class="fas fa-chevron-left"></i></button>
<button class="btn popup-btn" id="popupNext" title="Next Image"><i class="fas fa-chevron-right"></i></button>
<button class="btn popup-btn" id="popupIn" title="Zoom In"><i class="fas fa-search-plus"></i></button>
<button class="btn popup-btn" id="popupOut" title="Zoom Out"><i class="fas fa-search-minus"></i></button>
<button class="btn popup-btn" id="popupFit" title="Fit"><i class="fas fa-expand"></i></button>
</div>
<button class="btn popup-btn" id="popupClose" title="Close"><i class="fas fa-times"></i></button>
</div>
<div id="popup-content">
<img src="${current}" alt="Chicken Image" />
</div>
</div>`;
  popupContent = document.getElementById("popup-content");
  let popimg = popupContent.querySelector("img");
  let popImgContainerHeight = popupContent.clientHeight;
  let popImgContainerWidth = popupContent.clientWidth;
  let popDefaultWidth;
  if (popImgContainerWidth < popImgContainerHeight * 1.6) {
    popDefaultWidth = popImgContainerWidth;
  } else {
    popDefaultWidth = popImgContainerHeight * 1.45;
  }
  let popCurrentWidth = popDefaultWidth;
  popimg.style.width = `${popCurrentWidth}px`;

  const popupClose = document.getElementById("popupClose");
  const popupPrev = document.getElementById("popupPrev");
  const popupNext = document.getElementById("popupNext");
  const popupIn = document.getElementById("popupIn");
  const popupOut = document.getElementById("popupOut");
  const popupFit = document.getElementById("popupFit");

  popupClose.addEventListener("click", closePop);
  popupPrev.addEventListener("click", prevPop);
  popupNext.addEventListener("click", nextPop);
  popupIn.addEventListener("click", inPop);
  popupOut.addEventListener("click", outPop);
  popupFit.addEventListener("click", fitPop);

  document.documentElement.style.overflowY = "hidden";

  function closePop() {
    popupContainer.innerHTML = ``;
    popupClose.removeEventListener("click", closePop);
    popupPrev.removeEventListener("click", prevPop);
    popupNext.removeEventListener("click", nextPop);
    popupIn.removeEventListener("click", inPop);
    popupOut.removeEventListener("click", outPop);
    popupFit.removeEventListener("click", fitPop);

    document.documentElement.style.overflowY = "auto";
  }

  function nextPop() {
    currentId += 1;
    if (currentId > zoomableImages.length - 1) {
      currentId = 0;
    }
    popupContent.innerHTML = `<img src="${zoomableImages[currentId]}" alt="Chicken Image" />`;
    popimg = popupContent.querySelector("img");
    popCurrentWidth = popDefaultWidth;
    popimg.style.width = `${popCurrentWidth}px`;
  }
  function prevPop() {
    currentId -= 1;
    if (currentId < 0) {
      currentId = zoomableImages.length - 1;
    }
    popupContent.innerHTML = `<img src="${zoomableImages[currentId]}" alt="Chicken Image" />`;
    popimg = popupContent.querySelector("img");
    popCurrentWidth = popDefaultWidth;
    popimg.style.width = `${popCurrentWidth}px`;
  }
  function inPop() {
    popCurrentWidth = popCurrentWidth * 1.1;
    popimg.style.width = `${popCurrentWidth}px`;
  }
  function outPop() {
    popCurrentWidth = popCurrentWidth / 1.1;
    popimg.style.width = `${popCurrentWidth}px`;
  }
  function fitPop() {
    popCurrentWidth = popDefaultWidth;
    popimg.style.width = `${popDefaultWidth}px`;
  }
}
