import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>I am Azka Noor, a skilled MERN Stack Developer with over two years of
               experience in building dynamic and responsive web applications.
                My expertise lies in leveraging MongoDB, Express.js, React.js,
                 and Node.js to create robust, scalable, and high-performance applications.
                  I have a strong proficiency in JavaScript (ES6+), coupled with a deep 
                  understanding of modern frameworks and libraries like Redux, Webpack, 
                  and Gatsby. My hands-on experience includes developing full-stack applications,
                   implementing secure user authentication, and optimizing application performance
                    for seamless user experiences.

            </p>
            <p>
            In my previous roles, I have demonstrated a consistent ability to deliver high-quality
             solutions within tight deadlines. At Tintash, I played a key role in designing and
              implementing user interfaces, optimizing them for maximum speed and scalability,
               and maintaining best practices for clean and maintainable code. Currently, at Fiverr, 
               I have developed applications like TaskTracker and EventPlanno, achieving significant
                improvements in user engagement and satisfaction. I am passionate about coding standards, 
                automated testing, and continuous integration, always striving to enhance code quality and 
                application performance. My goal is to bring innovative solutions and a commitment to excellence
                 to any team I join.

            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p>
      </div>
    </div>
  );
};

export default About;
