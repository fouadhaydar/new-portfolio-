import "../index.css";
import { motion, useScroll, useTransform } from "framer-motion";
import TextHeading from "./TextHeading";
import SvgAnimation from "./SvgAnimation";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.section
      className={`flex flex-col items-center lg:justify-end xsm:justify-center container h-[93vh]`}
      ref={targetRef}
      style={{
        opacity,
      }}
      id="home"
    >
      <TextHeading scrollYProgress={scrollYProgress} />
      <SvgAnimation />
    </motion.section>
  );
};

export default Hero;
