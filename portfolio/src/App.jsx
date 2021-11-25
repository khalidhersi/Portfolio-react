import "./App.scss";
import logo from "./assets/images/logo.png"
import gHLogo from "./assets/images/github-icons.png"
import linkedInLogo from "./assets/images/linkedin-icon.png"
import cvLogo from "./assets/images/2258479.png"
import orangeAndBlue from "./assets/images/orangeand blue 1st page.png"
import page2 from "./assets/images/page 2.png" 
import htmlLogo from "./assets/images/html.png"
import cssLogo from "./assets/images/css.png" 
import jsLogo from "./assets/images/js.png"
import cSharpLogo  from "./assets/images/c-sharp.png"
import reactLogo from "./assets/images/react.png"
import bufferLogo from "./assets/images/loading-buffering.gif"
import page3 from "./assets/images/page 3.png"
import npmLogo from "./assets/images/npm-logo.png"
import calculatorLogo from "./assets/images/calculator.png"
import minesweeperLogo from "./assets/images/minesweeperLogo.png"



function App() {

  return (
    <div className="app">
      <div class="grid-body-container">
        <nav class="nav-bar">
          <img class="nav__logo" src={logo} alt="logo" />
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
                    src={gHLogo}
                    alt="socails"
                    class="socials"
                    id="git"
                  />
                </a>
                <a href="#Home">
                  <img
                    src={linkedInLogo}
                    alt="socails"
                    class="socials"
                    id="li"
                  />
                </a>
                <a href="#Home">
                  <img
                    src={cvLogo}
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
              src={orangeAndBlue}
              alt="button backgorund"
              id="o-b"
            />
            <button class="view-more">View more</button>
          </section>
        </main>
        <section class="about-page" id="About">
          <img src={page2} alt="bg-page 2" />
          <h2 class="about__tittle">About Me</h2>
          <p>
            Hey My name's Khalid and I'm a Web Developer based in London. Check
            out my Tehnologies{" "}
          </p>
          <div class="project__grid">
            <div class="grid__items">
              <img class="rea" src={htmlLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="rea" src={cssLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="react" src={jsLogo} id="js" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={cSharpLogo} id="c" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={reactLogo} id="react" alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={npmLogo} alt="" />
            </div>
          </div>
        </section>
        <section class="project-page" id="Contact">
          <img src={page3} alt="bg-page 3" />
          <h2 class="about__tittle">Projects</h2>
          <div class="project__grid">
            <div class="grid__items">
              <img class="buffer" src={calculatorLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={minesweeperLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={bufferLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={bufferLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={bufferLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={bufferLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={bufferLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={bufferLogo} alt="" />
            </div>
            <div class="grid__items">
              <img class="buffer" src={bufferLogo}alt="" />
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
                src={logo}
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
