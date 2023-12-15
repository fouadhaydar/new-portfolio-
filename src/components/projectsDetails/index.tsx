import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { data } from "../../constance";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { ArrowUpward, GitHub } from "@mui/icons-material";

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
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.7, 1],
    [0, 0.4, 1, 0.5, 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);

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
  useEffect(() => {
    window.scrollTo(0, 5);
  }, []);

  return (
    <div
      className={`lg:flex xsm:block justify-center lg:gap-7 xsm:gap-2 items-center ${
        windowWidth > 780 ? "snap" : ""
      }`}
    >
      <div className="md:h-[100vh] lg:w-1/2 xsm:w-full flex flex-col justify-center ">
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
          {title === "Conclusion" && (
            <div className="flex items-center justify-center gap-4 xsm:flex-wrap sm:flex-nowrap">
              <button className="w-full bg-blue-400 text-white rounded-md py-2 hover:bg-blue-500 hover:scale-105 transition ease-in-out delay-100">
                See Demo
              </button>
              <button className="w-full bg-blue-400 text-white rounded-md py-2 flex items-center justify-center gap-2 hover:bg-blue-500 hover:scale-105 transition ease-in-out delay-100">
                <GitHub />
                <span> See the Code on Github </span>
              </button>
            </div>
          )}
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
    <section className="text-white w-3/4 mx-auto flex flex-col gap-6  mb-[20px]">
      <div className="flex items-center gap-2 md:sticky md:top-[70px] md:left-0 md:z-10 sm:mt-[70px] pt-4">
        <IconButton
          onClick={onclick}
          size="small"
          color="primary"
          className="hover:scale-110 transition ease-in-out delay-100"
        >
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
      {window.innerWidth >= 500 && (
        <IconButton
          onClick={() => window.scrollTo(0, 0)}
          color="primary"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "10px",
            backgroundColor: "white",
            width: "40px",
            height: "40px",
          }}
        >
          <ArrowUpward />
        </IconButton>
      )}
    </section>
  );
};

export default ProjectsDetails;
