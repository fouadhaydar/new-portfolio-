import { motion } from "framer-motion";

const SvgAnimation = () => {
  return (
    <motion.div className="lg:w-[600px] lg:h-[600px] sm:h-[400px] sm:w-[400px]  xsm:h-[300px] xsm:w-[300px]">
      <iframe
        src="https://lottie.host/embed/5a330aea-5208-4c84-903d-38d21d682186/0sKNlhH43S.json"
        className="w-full h-full"
      ></iframe>
    </motion.div>
  );
};

export default SvgAnimation;
