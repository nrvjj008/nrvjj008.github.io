import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="cursor-pointer "  onClick={() => window.open(source_code_link, "_blank")}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}


        className='hover:scale-110 hover:shadow-2xl transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-600 pb-4 rounded-2xl sm:w-[360px] w-full'
      >
        <div className=' relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain shadow-2xl'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] px-4'>{name}</h3>
          <p className='mt-2 text-slate-200 text-[18px] px-4'>{description}</p>
        </div>

        {/*<div className='mt-4 flex flex-wrap gap-2'>*/}
        {/*  {tags.map((tag) => (*/}
        {/*    <p*/}
        {/*      key={`${name}-${tag.name}`}*/}
        {/*      className={`text-[14px] ${tag.color}`}*/}
        {/*    >*/}
        {/*      #{tag.name}*/}
        {/*    </p>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] text-slate-700 uppercase tracking-wider `}>My work</p>
        <h2 className={`text-slate-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3  text-slate-700 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
