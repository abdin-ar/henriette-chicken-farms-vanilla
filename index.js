const slider = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let slideTimer;

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
const slideDuration = 5000;
slideTimer = setTimeout(moveSlides, slideDuration);

function moveSlides() {
  clearTimeout(slideTimer);
  counter++;
  carousel();
  slideTimer = setTimeout(moveSlides, slideDuration);
}

nextBtn.addEventListener("click", function () {
  clearTimeout(slideTimer);
  counter++;
  carousel();
  slideTimer = setTimeout(moveSlides, slideDuration);
});

prevBtn.addEventListener("click", function () {
  clearTimeout(slideTimer);
  counter--;
  carousel();
  slideTimer = setTimeout(moveSlides, slideDuration);
});

slider.addEventListener("mouseenter", holdEv);

function holdEv() {
  clearTimeout(slideTimer);
  slider.addEventListener("mouseleave", resumeEv);
}

function resumeEv() {
  slider.removeEventListener("mouseleave", resumeEv);
  slideTimer = setTimeout(moveSlides, slideDuration);
}

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(${counter * -100}%)`;
  });
}
