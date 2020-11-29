import "./App.scss";
import menuicon from "./images/menu.png";
import coolphoto from "./images/cool.jpg";
import AnimatedCursor from "react-animated-cursor";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Power2, Power3, gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function App() {
  const appRef = useRef(null);
  const containerRef = useRef(null);
  const imageContainer = useRef(null);

  const homeLinkRef = useRef(null);
  const servicesLinkRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

  const logoref = useRef(null);
  const navref = useRef(null);

  const headertextref = useRef(null);

  let imgReveal = CSSRulePlugin.getRule(".img-container::after");

  let tl = new gsap.timeline();

  useEffect(() => {
    tl.to(appRef.current, {
      duration: 0,
      visibility: "visible",
    });
    tl.to(imgReveal, {
      duration: 1.4,
      width: "0%",
      ease: Power2.easeInOut,
    });
    gsap.from(imageContainer.current, {
      duration: 1.4,
      scale: 8,
      ease: Power2.easeInOut,
      delay: -0.2,
    });
    tl.to(navref.current, {
      duration: 0,
      visibility: "visible",
    });
    tl.from(
      [contactLinkRef.current, aboutLinkRef.current, servicesLinkRef.current, homeLinkRef.current, logoref.current],
      {
        duration: 0.35,
        y: -20,
        opacity: 0,
        ease: Power3.easeInOut,
        stagger: 0.1,
      }
    );
  });

  return (
    <div ref={appRef} className="App">
      <AnimatedCursor
        innerSize={15}
        outerSize={10}
        color="53, 53, 53"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      <nav ref={navref}>
        <h1 ref={logoref}>designbox</h1>
        <ul className="nav-links">
          <li ref={homeLinkRef} className="navlinks">
            Home
          </li>
          <li ref={servicesLinkRef} className="navlinks">
            Services
          </li>
          <li ref={aboutLinkRef} className="navlinks">
            About
          </li>
          <li ref={contactLinkRef} className="navlinks">
            Contact
          </li>
          <img height="20px" src={menuicon} alt="menu icon" />
        </ul>
      </nav>

      <section className="section-1">
        <div ref={containerRef} className="container">
          <div className="img-container">
            <img ref={imageContainer} src={coolphoto} alt="" />
          </div>
        </div>
      </section>

      <section className="section-2">
        <div style={{ height: "5rem" }}></div>
        <div ref={headertextref} className="header-text">
          Designbox is a Toronto based web development and marketing firm. We have the expertise and in-house talent
          that will turn your great idea from a dream into a reality. Just bring us your vision and let us do the rest.
        </div>
        <div style={{ height: "5rem" }}></div>
      </section>
    </div>
  );
}
