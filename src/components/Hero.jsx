import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TextTransition, { presets } from 'react-text-transition';

   const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];

const Hero = () => {
  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     3000, // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
   
    <section 
    className={`relative w-full h-screen mx-auto`}>
      <div
        className={` absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start justify-center gap-5`}
      >
       

        <div>
          <h1 className={`${styles.heroHeadText} text-slate-800 `}>
            Hi, I'm <span className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r  from-blue-500 to-blue-600'>Nirav</span>
          </h1>
          <TextTransition></TextTransition>
          <p className={`${styles.heroSubText} mt-2 text-slate-800 rounded-xl backdrop-blur`}>
          Experienced full stack software developer with 3 years of experience in various technologies, seeking to join a dynamic team and positively impact the tech industry.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
