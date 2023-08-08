import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Lottie from "lottie-react";
import lottieAppAnimation from "../../public/animation_ll1auaqn.json";
import lottieWebAnimation from "../../public/animation_ll1b3g85.json";

const Hero = () => {
    const [index, setIndex] = useState(0);
    const animations = [lottieWebAnimation, lottieAppAnimation];
    const texts = ["Full Stack Developer", "Mobile App Developer"];

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((prevIndex) => (prevIndex + 1) % 2),
            2000 // every 2 seconds
        );
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="relative w-full h-screen mx-auto flex flex-col md:flex-row">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center p-12 w-full">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className={`${styles.heroHeadText} text-slate-800`}>
                        Hi, I'm <span className="inline-block ">Nirav</span>
                    </h1>
                    <motion.span
                        key={index}
                        animate={{ text: texts[index], transition: { duration: 1 ,type:"spring"}, opacity: [0, 1] }}
                        className={`${styles.heroHeadText} font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600`}
                    >
                        {texts[index]}
                    </motion.span>
                    <p className={`${styles.heroSubText} mt-2 text-slate-800 rounded-xl backdrop-blur`}>
                        Experienced full stack software developer with 4 years of experience in various technologies, seeking to join a dynamic team and positively impact the tech industry.
                    </p>
                    <a href="/Nirav_Joshi_Resume.pdf" download="Nirav_Joshi_Resume.pdf">
                    <button className="text-xl hover:scale-110 cursor-pointer px-8 py-2  mt-8 bg-blue-500 flex justify-center animate-pulse transition-all duration-200 text-center  rounded-full shadow-2xl">Resume</button>
                        </a>
                    </div>
                <motion.div key={index} animate={{scale:[0.5,1],opacity:[0,1],transition:{duration:1,type:"easeInOut"}}} className="p-12 w-full md:w-1/2 h-full ">
                    <Lottie animationData={animations[index]} />
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
