class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Samuel Natal</title>
    <link rel="stylesheet" href="/assets/css/index.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" /> 
  </head>
  <body>
    <nav class="navbar navbar-expand-lg removed-bg-body-tertiary removed-fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img id="logo" src="assets/img/original.PNG" alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img id="logo" src="assets/img/original.PNG" alt="logo" /></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/work">Portifolio</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
      `;
  }
}

const year = new Date().getFullYear();
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `     
    <footer>
    <div class="socio-icon-dv">
      <img class="socio-icon" src="/assets/icon/icons8-github.svg" alt="Github">
      <img class="socio-icon" src="/assets/icon/icons8-twitter.svg" alt="Twitter">
      <img class="socio-icon" src="/assets/icon/icons8-facebook.svg" alt="Facebook">
      <img class="socio-icon" src="/assets/icon/icons8-instagram.svg" alt="Instagram">
      <img class="socio-icon" src="/assets/icon/icons8-linkedin.svg" alt="Linkedin">
    </div>
    <p class="copyright-p">&copy;&nbsp;`+year+`&nbsp;&nbsp;&nbsp;www.natalsamuel.com</p>
  </footer> 
  </body>
  </html>   
      `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

var infoBtnCounter = 0;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var infoArray = document.getElementsByClassName("info-div");
var progArray = document.getElementsByClassName("progress-bar");

// Codes for the next button in about page
nextBtn.addEventListener("click", () => {
  infoBtnCounter++;
  progArray[infoBtnCounter].style.visibility = "visible";
  progArray[infoBtnCounter].style.animation = "3s ease-out 0s 1 exp";
  if (infoBtnCounter <= 3) {
    prevBtn.style.visibility = "visible";
    for (i = 0; i < 4; i++) {
      if (i == infoBtnCounter) infoArray[i].style.display = "inline-block";
      else infoArray[i].style.display = "none";
    }
  }
  if (infoBtnCounter == 3) {
    nextBtn.style.visibility = "hidden";
  }
});

// Codes for the prev button in about page
prevBtn.addEventListener("click", () => {
  progArray[infoBtnCounter].style.visibility = "hidden";
  infoBtnCounter--;
  if (infoBtnCounter <= 3) {
    nextBtn.style.visibility = "visible";
    for (i = 0; i < 4; i++) {
      if (i == infoBtnCounter) infoArray[i].style.display = "inline-block";
      else infoArray[i].style.display = "none";
    }
  }
  if (infoBtnCounter == 0) {
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "visible";
  }
});

const carousel = new bootstrap.Carousel("#myCarousel");
