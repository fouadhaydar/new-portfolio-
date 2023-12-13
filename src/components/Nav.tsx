import { Link } from "react-router-dom";

const Nav = ({ home }: { home: boolean }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // sm:fixed sm:top-0 sm:left-[50%] sm:translate-x-[-50%]
  return (
    <nav className={`w-3/4 mx-auto sm:py-6  ${!home && " bg-black "}`}>
      <div className="text-white xsm:hidden sm:flex sm:justify-between sm:items-center">
        <Link
          className="text-[12px] cursor-pointer "
          to="/"
          onClick={() => scrollToSection("/home")}
        >
          Home
        </Link>
        <Link
          className="text-[12px] cursor-pointer "
          to="#projects"
          onClick={() => scrollToSection("#projects")}
        >
          Projects
        </Link>
        <a
          className="text-[12px] cursor-pointer "
          href="#about-me"
          onClick={() => scrollToSection("#about-me")}
        >
          About Me
        </a>
        <a
          className="text-[12px] cursor-pointer "
          href="#contact"
          onClick={() => scrollToSection("#contact")}
        >
          Contact Me
        </a>
      </div>
      <div className="text-white w-full mx-auto xsm:fixed xsm:flex xsm:justify-around xsm:items-center py-4 h-[30px] xsm:bottom-0 xsm:left-0 sm:hidden bg-gray-700">
        <span className="text-[12px]">Hone</span>
        <span className="text-[12px]">Projects</span>
        <span className="text-[12px]">About me</span>
        <span className="text-[12px]">Contact us</span>
      </div>
    </nav>
  );
};

export default Nav;
