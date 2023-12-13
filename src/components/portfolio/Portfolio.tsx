import { useEffect, useRef, useState } from "react";
import dashBoard from "../../assets/dashboard.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "../../constance";

export const Single = ({
  route,
  text,
  title,
}: {
  route: string;
  text: string;
  title: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  // const navigate = useNavigate();

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

  // console.log(windowWidth);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      className="flex xsm:flex-col md:flex-row justify-center items-center md:gap-6 xsm:gap-8 text-white h-[100vh]"
      style={{
        scrollSnapAlign: "start",
        opacity: windowWidth > 780 ? opacity : 1,
      }}
    >
      <div
        className=" md:w-[40%] xsm:max-w-[400px] rounded-[7px] overflow-hidden gap-8"
        ref={targetRef}
      >
        <img
          src={dashBoard}
          alt="laptop"
          className=" w-full h-ful hover:scale-110 transition duration-150 ease-in-out text-black "
        />
      </div>
      <motion.div
        style={{ y: windowWidth > 780 ? y : 0 }}
        className="flex flex-col gap-6 md:w-[55%] xsm:max-w-[400px]"
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-col gap-4 items-start line-clamp-4 overflow-hidden">
          <p className=" text-gray-400 line-clamp-3 overflow-hidden">{text}</p>
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
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 15,
  });
  // md:top-[20px] xsm:top-[10px]
  return (
    <div className="text-white container relative" ref={target} id="projects">
      <div className="xsm:hidden md:flex flex-col items-center sticky top-0 left-0 z-10">
        <h1 className="md:text-3xl xsm:text-xl py-[20px] text-white">
          Projects
        </h1>
        <motion.div
          className="w-full h-[3px] rounded bg-blue-400"
          style={{ scaleX }}
        />
        {/* ac92ff */}
      </div>
      <Single
        route="e-commerce"
        title="E-commerce Web App"
        text={data["e-commerce"].Overview[0].paragraph}
      />
      <Single
        route="dashboard"
        title="Dashboard for the e-commerce"
        text={data.dashboard.Overview[0].paragraph}
      />
    </div>
  );
};

export default Portfolio;
