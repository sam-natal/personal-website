class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="I'm Samuel Natal, an experienced software developer from Tanzania. My expertise lies in crafting robust Android and web applications that meet specific program specifications and goals." />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favcons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favcons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favcons/favicon-16x16.png">
    <link rel="manifest" href="/assets/favcons/site.webmanifest">
    <title>Samuel Natal</title>
    <link rel="stylesheet" href="/assets/css/index.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" /> 
  </head>
  <body>
    <nav class="navbar navbar-expand-lg removed-bg-body-tertiary fixed-top m-auto" style="width:88%;">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img id="logo" src="/assets/img/logo/logi-lg.PNG" alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img id="logo" src="/assets/img/logo/logi-lg.PNG" alt="logo" /></h5>
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
    this.innerHTML =
      `     
    <footer>
    <div class="socio-icon-dv">
      <a href="https://github.com/samuelnatal" class="socio-icon-a">
        <img class="socio-icon" src="/assets/icon/icons8-github.svg" alt="Github" />
      </a>
      <a href="https://twitter.com/_samuelnatal" class="socio-icon-a">
      <img class="socio-icon" src="/assets/icon/icons8-twitter.svg" alt="Twitter">
    </a>

    <a href="https://web.facebook.com/profile.php?id=61551547732470" class="socio-icon-a">
    <img class="socio-icon" src="/assets/icon/icons8-facebook.svg" alt="Facebook">
  </a>

  <a href="https://www.instagram.com/_samuelnatal/" class="socio-icon-a">
  <img class="socio-icon" src="/assets/icon/icons8-instagram.svg" alt="Instagram">
</a>
<a href="https://www.linkedin.com/in/samuel-natal-96b53b264/" class="socio-icon-a">
<img class="socio-icon" src="/assets/icon/icons8-linkedin.svg" alt="Linkedin">
</a>  
<a href="https://www.reddit.com/user/samuelnatal" class="socio-icon-a">
<img class="socio-icon" src="/assets/icon/icons8-reddit-48.png" alt="Reddit">
</a>  
    </div>
    <p class="copyright-p">&copy;&nbsp;` +
      year +
      `&nbsp;&nbsp;&nbsp;samuelnatal.com</p>
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
    prevBtn.style.display = "inline-block";
    for (i = 0; i < 4; i++) {
      if (i == infoBtnCounter) infoArray[i].style.display = "inline-block";
      else infoArray[i].style.display = "none";
    }
  }
  if (infoBtnCounter == 3) {
    nextBtn.style.display = "none";
  }
});

// Codes for the prev button in about page
prevBtn.addEventListener("click", () => {
  progArray[infoBtnCounter].style.visibility = "hidden";
  infoBtnCounter--;
  if (infoBtnCounter <= 3) {
    nextBtn.style.display = "inline-block";
    for (i = 0; i < 4; i++) {
      if (i == infoBtnCounter) infoArray[i].style.display = "inline-block";
      else infoArray[i].style.display = "none";
    }
  }
  if (infoBtnCounter == 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
  }
});

const carousel = new bootstrap.Carousel("#myCarousel");
