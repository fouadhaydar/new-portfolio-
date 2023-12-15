import React from "react";

const AboutMe = () => {
  const titleStyle =
    "text-xl font-bold  border-b-[2px] border-white w-fit my-3";
  return (
    <section
      id="about-me"
      className="container h-fit min-h-[100vh] flex flex-col justify-center mt-1 pb-20 snap"
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <div className="text-gray-300 flex flex-col gap-4">
        <h2 className="md:text-3xl xsm:text-xl py-[20px] text-white">
          About Me
        </h2>
        <p>
          <strong>Hello,</strong> I'm Fouad Haydar, a self-taught junior
          front-end developer. While my formal education isn't in programming,
          I've achieved good results through hard work, and my level appears
          well in my projects.
        </p>
        <div>
          <h2 className={titleStyle}>Technical Skills</h2>
          <p>
            In the world of front-end development, I'm familiar with{" "}
            <strong className="text-white">
              {" "}
              HTML, CSS, JavaScript, TypeScript, React , Redux Toolkit, Tailwind
              CSS, Material-UI,
            </strong>{" "}
            and I know a bit about React Native. I'm also comfortable with Git.
            I've got a decent grasp of Java, which I've used to explore data
            structures and algorithms.
          </p>
        </div>
        <div>
          <h2 className={titleStyle}>Love for Learning</h2>
          <p>
            Even though my degree isn't in programming, my love for learning has
            helped me build a strong skill set. I'm not just about coding; I've
            collaborated well with a back-end developer, and this was shown in
            my projects, showcasing not only technical skills but also good
            communication.
          </p>
        </div>
        <div>
          <h2 className={titleStyle}>In a Nutshell</h2>
          <p>
            As a self-learner in front-end development, I've picked up a mix of
            skills, dived into programming concepts, and honed my ability to
            work effectively with others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
