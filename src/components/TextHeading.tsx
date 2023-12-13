import { MotionValue, motion, useTransform } from "framer-motion";

const TextHeading = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="text-white text-3xl flex item-center justify-center lg:w-[600px] lg:h-[200px]"
      style={{ y: yBg }}
    >
      <div className="w-full flex items-end h-full">
        <div className="line-rounded" />
        <div className="sm:px-[40px] xsm:px-[10px] w-full flex flex-col leading-normal">
          <h1 className="xsm:text-[16px] sm:text-xl lg:text-2xl">
            Front-End Development is About
          </h1>
          <p className="lg:text-[16px] sm:text-[14px] xsm:text-[12px] text-blue-400">
            Bringing Your Vision to Life
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TextHeading;
