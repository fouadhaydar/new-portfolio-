import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./index.css";
import AboutMe from "./components/aboutMe/AboutMe";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

function App() {
  return (
    <main>
      <div
        className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
        // scroll-snap-type: y mandatory;
      >
        {/* <Nav /> */}
        <Hero />
      </div>
      <Portfolio />
      <AboutMe />
      <Contact />
      {window.innerWidth >= 500 && (
        <IconButton
          onClick={() => window.scrollTo(0, 0)}
          color="primary"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "10px",
            backgroundColor: "white",
            width: "40px",
            height: "40px",
          }}
        >
          <ArrowUpward />
        </IconButton>
      )}
    </main>
  );
}

export default App;
