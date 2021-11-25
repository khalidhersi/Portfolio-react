import "./App.scss";

function App() {
  return (
    <div className="app">
      <div class="grid-body-container">
        <nav class="nav-bar">
          <img class="nav__logo" src="./images/kld logo.png" alt="logo" />
          <ul class="nav__list">
            <a href="#Home" class="nav__links">
              Home.
            </a>
            <a href="#About" class="nav__links">
              About.
            </a>
            <a href="#Contact" class="nav__links">
              Contact.
            </a>
          </ul>
        </nav>
        <main class="hero" id="Home">
          <div class="hero__text">
            <div class="left__side">
              <h1 class="title__h1">I'm</h1>
            </div>
            <div class="right__side">
              <h2 class="title__h2">Khalid.</h2>
              <div class="social__icons">
                <a href="#Home">
                  <img
                    src="./images/github-icons.png"
                    alt="socails"
                    class="socials"
                    id="git"
                  />
                </a>
                <a href="#Home">
                  <img
                    src="./images/linkedin-icon.png"
                    alt="socails"
                    class="socials"
                    id="li"
                  />
                </a>
                <a href="#Home">
                  <img
                    src="./images/2258479.png"
                    alt="socails"
                    class="socials"
                    id="cv"
                  />
                </a>
              </div>
              <h3 class="title__h2">a Web Developer.</h3>
            </div>
          </div>
          <section class="c2a">
            <img
              src="./images/orangeand blue 1st page.png"
              alt="button backgorund"
              id="o-b"
            />
            <button class="view-more">View more</button>
          </section>
        </main>
        <section class="about-page" id="About">
          <img src="./images/page 2.png" alt="bg-page 2" />
          <h2 class="about__tittle">About Me</h2>
          <p>
            Hey My name's Khalid and I'm a Web Developer based in London. Check
            out my Tehnologies{" "}
          </p>
          <div class="project__grid">
            <div class="grid__items">
              <img class="rea" src="./images/html.png" alt="" />
            </div>
            <div class="grid__items">
              <img class="rea" src="./images/css.png" alt="" />
            </div>
            <div class="grid__items">
              <img class="react" src="./images/js.png" id="js" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/c-sharp.png" id="c" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images//react.png" id="react" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
          </div>
        </section>
        <section class="project-page" id="Contact">
          <img src="./images/page 3.png" alt="bg-page 3" />
          <h2 class="about__tittle">Projects</h2>
          <div class="project__grid">
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src="./images/loading-buffering.gif" alt="" />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <footer class="footer-bar">
          <ul class="footer__list">
            <div class="footer__big-links">
              <img
                class="footer__logo"
                src="./images/kld logo.png"
                alt="logo"
              />
              <a href="#Home" class="footer__left">
                Home
              </a>
              <a href="#Contact" class="footer__left">
                Contact
              </a>
              <a href="#Home" class="footer__left">
                Socials
              </a>
              <h3 class="backslash" id="right">
                /
              </h3>
              <h3 class="backslash" id="left">
                /
              </h3>
            </div>
            <div class="footer__small-links">
              <a href="#Home" class="footer__rught">
                Github
              </a>
              <a href="#Home" class="footer__rught">
                Linked In
              </a>
              <a href="#Home" class="footer__rught">
                My CV
              </a>
              <br />
              <a href="#Home" class="footer__rught">
                +44 12345678910
              </a>
              <a href="#Home" class="footer__rught">
                ABC@123.com
              </a>
              <br />
              <a href="#Home" class="footer__rught">
                Back to Top
              </a>
            </div>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
