import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "../../constance";
import dashBoard from "../../../public/dashboard/Dashboard-light.png";
import signUp from "../../../public/electornics/sign-up.png";

export const Single = ({
  route,
  text,
  title,
  image,
}: {
  route: string;
  text: string;
  title: string;
  image: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width when the component mounts
  useEffect(() => {
    // Event handler function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 1, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      className="flex xsm:flex-col md:flex-row justify-center items-center md:gap-6 xsm:gap-8 text-white  h-[100vh] snap"
      style={{ opacity: windowWidth > 780 ? opacity : 1 }}
    >
      <div
        className=" md:w-[40%] xsm:max-w-[400px] rounded-[7px] overflow-hidden gap-8 border-[2px] border-blue-400 "
        ref={targetRef}
      >
        <a
          href={`${
            route === "dashboard"
              ? "https://dashboard-electronics.netlify.app"
              : "https://electronics-rust.vercel.app"
          }`}
          className="w-full h-full overlay"
        >
          <img src={image} alt="laptop" className=" w-full h-ful" />
        </a>
      </div>
      <motion.div
        style={{ y: windowWidth > 780 ? y : 0 }}
        className="flex flex-col gap-6 md:w-[55%] xsm:max-w-[500px]"
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-col gap-4 items-start line-clamp-6 overflow-hidden">
          <p className=" text-gray-400 line-clamp-5 overflow-hidden">{text}</p>
          <Link to={`/details/${route}`} className="text-blue-400">
            See Details
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });
  return (
    <div
      className="text-white container relative snap"
      ref={target}
      id="portfolio"
    >
      <div className="md:hidden flex flex-col items-center sticky top-0">
        <motion.div
          className="w-[100vw] h-[3px] absolute rounded bg-blue-400"
          style={{ scaleX }}
        />
      </div>

      <div className="xsm:hidden md:flex flex-col items-center sticky top-0 left-0 z-10">
        <motion.div
          className="w-[100vw] h-[3px] absolute rounded bg-blue-400"
          style={{ scaleX }}
        />
        <h2 className="md:text-3xl xsm:text-xl py-[20px] text-white">
          Projects
        </h2>
      </div>
      <Single
        route="e-commerce"
        title="E-commerce Web App"
        text={data["e-commerce"].Overview[0].paragraph!}
        image={signUp}
      />
      <Single
        route="dashboard"
        title="Dashboard for the e-commerce"
        text={data.dashboard.Overview[0].paragraph!}
        image={dashBoard}
      />
    </div>
  );
};

export default Portfolio;
