import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { data } from "../../constance";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

type Paragraph = {
  id: string;
  title?: string;
  paragraph: string;
};
const CustomSection = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: Paragraph[];
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

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

  return (
    <div className="lg:flex xsm:block justify-center lg:gap-7 xsm:gap-2 items-center md:snap-start">
      <div className="md:h-[100vh] lg:w-1/2 xsm:w-full flex flex-col justify-center">
        <motion.div
          style={{
            opacity: windowWidth > 1200 ? opacity : 1,
            y: windowWidth > 1200 ? y : 0,
          }}
        >
          <h2 className="text-xl font-semibold border-b-2 border-white mb-4 py-2 w-fit">
            {title}
          </h2>
          {paragraph.map((ele) => (
            <div key={ele.id}>
              {ele.title && <h3 className="font-bold">{ele.title}</h3>}
              <p className="py-4 text-gray-400">{ele.paragraph}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        style={{ opacity }}
        ref={target}
        className="xsm:hidden lg:block w-[500px] h-[300px] bg-white rounded-md"
      />
    </div>
  );
};

const ProjectsDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const onclick = () => {
    navigate(-1);
  };

  const getKeys = () => {
    const keys: string[] = [];
    for (const key in data["e-commerce"]) {
      keys.push(key);
    }
    return keys;
  };

  return (
    <section className="text-white w-3/4 mx-auto flex flex-col gap-6">
      <div className="flex items-center gap-2 md:sticky md:top-[70px] md:left-0 md:z-10 sm:mt-[70px]  pt-4">
        <IconButton onClick={onclick} size="small" color="primary">
          <ArrowBackIcon />
        </IconButton>
        <span className="text-[14px] text-gray-400">Go Back</span>
        <div className="w-[1px] h-[15px] mx-2 bg-gray-400" />
        <span className="text-[14px] text-gray-400">
          {name?.toUpperCase()[0].concat(name.substring(1, name.length))}
        </span>
      </div>

      <div>
        {getKeys().map((key) => (
          <CustomSection
            key={uuidv4()}
            title={key}
            paragraph={data[name][key]}
          />
        ))}
      </div>
      {/* <footer className="my-40">footer</footer> */}
    </section>
  );
};

export default ProjectsDetails;
