import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./index.css";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <main className="w-[100vw] min-h-[100vh]">
      <div
        className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
        style={{
          scrollSnapAlign: "start",
        }}
      >
        <Nav home={true} />
        <Hero />
      </div>
      <Portfolio />
      <AboutMe />
      <Contact />
      <div
        className="fixed right-[10px] bottom-[10px] rounded-full bg-white w-10 h-10"
        onClick={() => window.scrollTo(0, 0)}
      />
    </main>
  );
}

export default App;
