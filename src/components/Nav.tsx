import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const Nav = () => {
  // const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // sm:fixed sm:top-0 sm:left-[50%] sm:translate-x-[-50%]
  // const navigateTo = (to: string) => {
  // }
  // z-10 fixed top-0 right-[50%] translate-x-[50%] bg-black
  return (
    <nav className={`w-full mx-auto sm:py-3`}>
      <div className=" w-3/4 mx-auto text-white xsm:hidden sm:flex sm:justify-between sm:items-center ">
        <button
          className="text-[12px] cursor-pointer "
          onClick={() => scrollToSection("/home")}
        >
          Home
        </button>
        <button
          className="text-[12px] cursor-pointer "
          onClick={() => scrollToSection("portfolio")}
        >
          Projects
        </button>
        <button
          className="text-[12px] cursor-pointer "
          onClick={() => scrollToSection("about-me")}
        >
          About Me
        </button>
        <button
          className="text-[12px] cursor-pointer "
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>
      </div>
      <div className="text-white w-full mx-auto xsm:fixed xsm:flex xsm:justify-around xsm:items-center py-5 h-[30px] xsm:bottom-0 xsm:left-0 sm:hidden bg-black z-50">
        <IconButton
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Home color="primary" />
        </IconButton>
        <IconButton
          onClick={() => {
            scrollToSection("portfolio");
          }}
        >
          <AppsIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => {
            scrollToSection("about-me");
          }}
        >
          <PersonIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => {
            scrollToSection("contact");
          }}
        >
          <EmailIcon color="primary" />
        </IconButton>
      </div>
    </nav>
  );
};

export default Nav;
