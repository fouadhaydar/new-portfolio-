import "../index.css";
import { motion, useScroll, useTransform } from "framer-motion";
import TextHeading from "./TextHeading";
import SvgAnimation from "./SvgAnimation";
import { useRef } from "react";
import Nav from "./Nav";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className="h-[100vh] snap">
      <Nav />
      <motion.div
        className={`flex flex-col items-center justify-center container h-[100%] self-center`}
        ref={targetRef}
        style={{
          opacity,
        }}
        id="home"
      >
        <TextHeading scrollYProgress={scrollYProgress} />
        <SvgAnimation />
      </motion.div>
    </div>
  );
};

export default Hero;
