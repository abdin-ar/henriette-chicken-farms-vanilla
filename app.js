/* ++++++++++++++++++++++++ Preloader ++++++++++++++++++++++++ */
const preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.classList.add("preloader-end");
});
/* +++++++++++++++++++++ end of Preloader +++++++++++++++++++++ */
/* +++++++++++++++++ populate pages with HTML +++++++++++++++++ */
headerHTML();
navHTML();
footerHTML();

function headerHTML() {
  const pageHeader = document.getElementById("pageHeader");
  let agreed =
    JSON.parse(window.localStorage.getItem("termsAgreementClosed")) || false;
  let agreementHTML = `<div class="terms-prompt"><div><p>This is a DEMO WEBSITE. By continuing to use this website, you agree to our <a href="terms.html">Terms of Service</a></p><button type="button" class="btn btn-bsh-regular" id='agreementBtn'>Ok, I got it</button></div></div>`;
  if (agreed === true) {
    agreementHTML = "";
  }
  const mainHeader = `<div class="header-logo-bcg">
    <img src="./images/logo.png" alt="Henrietta Chicken Farms" class="header-logo" />
    </div>
    <div class="header-img"></div>`;
  /* populate with HTML */
  pageHeader.innerHTML = `${mainHeader}${agreementHTML}`;
  if (!agreed) {
    const agreementBtn = document.getElementById("agreementBtn");
    agreementBtn.addEventListener("click", () => {
      window.localStorage.setItem("termsAgreementClosed", JSON.stringify(true));
      pageHeader.innerHTML = mainHeader;
    });
  }
}

function navHTML() {
  const pageNav = document.getElementById("pageNav");
  const active = pageNav.dataset.active;
  /* populate with HTML */
  pageNav.innerHTML = `<div class="myNav-sticky-center">
<div class="myNav2">
<ul class="myNav-social">
<li><a href="#" title="Our Page on Facebook"><i class="fab fa-facebook"></i></a></li>
<li><a href="#" title="Our Page on Twitter"><i class="fab fa-twitter"></i></a></li>
<li><a href="#" title="Our Page on Instagram"><i class="fab fa-instagram"></i></a></li>
<li><a href="#" title="Our Page on LinkedIn"><i class="fab fa-linkedin"></i></a></li>
<li><a href="#" title="Email Us"><i class="fas fa-envelope"></i></a></li>
</ul>
<button class="toggle-navlinks btn" title="Toggle Navigation Links">
<span><i class="fas fa-bars"></i></span>
<span class="displayNone"><i class="fas fa-times"></i></span>
</button>
</div>
<div class="myNav-links-container">
<ul class="myNav-links">
<li><a href="index.html" title="Home Page" data-active="home">Home</a></li>
<li><a href="products.html" title="Our Products" data-active="products">Products</a></li>
<li><a href="interview.html" title="An Interview with Henrietta!" data-active="interview">Meet Henrietta</a></li>
<li><a href="contact.html" title="Contact Us" data-active="contact">Contact Us</a></li>
<li><a href="faqs.html" title="Frequently Asked Questions" data-active="faqs">FAQs</a></li>
</ul>
</div>
</div>`;
  /* add active class to the active link */
  const pageLinks = pageNav.querySelectorAll(".myNav-links li a");
  pageLinks.forEach(function (link) {
    if (link.dataset.active == active) {
      link.classList.add("myNav-activeLink");
    }
  });
  /* toggle btn */
  const toggleBtn = document.querySelector(".toggle-navlinks");
  const toggleBtnContents = document.querySelectorAll(".toggle-navlinks span");
  const navbar = document.querySelector(".myNav-links-container");
  const navbarLinks = document.querySelector(".myNav-links");

  toggleBtn.addEventListener("click", function () {
    toggleBtnContents.forEach(function (span) {
      span.classList.toggle("displayNone");
    });
    const navHeight = Math.round(navbarLinks.getBoundingClientRect().height);
    if (navbar.style.height != `${navHeight}px`) {
      navbar.style.height = `${navHeight}px`;
    } else {
      navbar.style.height = 0;
    }
  });
}

function footerHTML() {
  const pageFooter = document.getElementById("pageFooter");
  /* populate with HTML */
  pageFooter.innerHTML = `<p class="text-small">&copy;<span id="pageDate"></span> <span class="footer-highlight">Henrietta&#174;</span> Chicken Farms. All Rights Reserved.</p><p class="text-small"><a href="terms.html">Terms of Service</a></p>`;
  /* add page date */
  const pageDate = document.getElementById("pageDate");
  setPageDate();
  function setPageDate() {
    pageDate.textContent = new Date().getFullYear();
  }
}
/* +++++++++++++ end of populate pages with HTML +++++++++++++ */

/* ++++++++++++++++++++ marketing section ++++++++++++++++++++ */
const marketingData = [
  `<a href="#" class="marketing-1">
<div class="marketing-1-center">
<div class="marketing-1-logo"><i class="fab fa-facebook-square"></i></div>
<div class="marketing-1-text">
<p class="marketing-1-text-head">Follow us on Facebook!</p>
<p class="marketing-1-text-main">Go to our Facebook page</p>
</div>
</div>
</a>`,
  `<a href="#" class="marketing-2">
<div class="marketing-2-center">
<div class="marketing-2-logo"><i class="fab fa-linkedin"></i></div>
<div class="marketing-2-text">
<p class="marketing-2-text-head">Check what we are doing on LinkedIn!</p>
<p class="marketing-2-text-main">Go to our LinkedIn page</p>
</div>
</div>
</a>`,
  `<a href="#" class="marketing-3">
<img src="./images/img10.jpg" alt="Egg-based recipes" class="marketing-3-img" />
<div class="marketing-3-center">
<div class="marketing-3-text">
<p class="marketing-3-text-head">Check these delicious egg-based recipes!</p>
<p class="marketing-3-text-main">Go to our Partner EasyRecipes&#174; Website <i class="fas fa-external-link-alt"></i></p>
</div>
</div>
</a>`,
  `<a href="#" class="marketing-4">
<div class="marketing-4-center">
<div class="marketing-4-logo-container">
<div class="marketing-4-logo"><i class="fab fa-twitter"></i></div>
<div class="right-side-container">
<div class="marketing-4-img-container">
<img src="./images/twitter2.gif" alt="twitter" class="marketing-4-img" />
</div>
<div class="marketing-4-text-container">
<p class="marketing-4-text">Visit our page on Twitter</p>
</div>
</div>
</div>
</div>
</a>`,
  `<a href="#" class="marketing-5">
<img src="./images/img13.jpg" alt="Images from our farm" class="marketing-5-img" />
<div class="marketing-5-center">
<div class="marketing-5-text">
<p class="marketing-5-text-main">Check these cute images of our chicken on Instagram! <span><i class="fab fa-instagram"></i></span></p>
</div>
</div>
</a>`,
];

const intervalTiming = 10000;
const marketing = document.getElementById("marketing");
let chosen;
let marketingInterval;

function marketingHTML() {
  if (marketing) {
    displayMarketing();
    marketingInterval = setInterval(displayMarketing, intervalTiming);
    marketing.addEventListener("mouseenter", enterEV);
  }
}

function enterEV() {
  clearInterval(marketingInterval);
  marketing.addEventListener("mouseleave", leaveEV);
}

function leaveEV() {
  marketingInterval = setInterval(displayMarketing, intervalTiming);
  marketing.removeEventListener("mouseleave", leaveEV);
}

function displayMarketing() {
  let newChosen = Math.floor(Math.random() * marketingData.length);
  if (newChosen == chosen) {
    if (newChosen == marketingData.length - 1) {
      chosen = 0;
    } else {
      chosen = newChosen + 1;
    }
  } else {
    chosen = newChosen;
  }
  marketing.innerHTML = `<h2 class="sr-only" id="ph2marketing">Advertising section</h2>
${marketingData[chosen]}`;
}

marketingHTML();
/* ++++++++++++++++ end of marketing section ++++++++++++++++ */
