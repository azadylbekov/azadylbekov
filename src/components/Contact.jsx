import { useEffect, useRef } from "react";
import whiteCube from "../assets/images/white_cube1.png";
import codeDecor1 from "../assets/images/codeDecor1.png";
import ScrollReveal from "scrollreveal";
import { srConfig } from "../utils/config.js";
import { useParallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";



export default function Contact() {
  const revealContainer = useRef(null);
  const { t } = useTranslation();


  useEffect(() => {
    ScrollReveal().reveal(revealContainer.current, srConfig());
  }, []);

  const codeDecor = useParallax({ speed: -10, translateY: ['0px', '300px'], opacity: [0, 1] });
  const cubeDecor = useParallax({ speed: 20 });

  return (
    <section
      id="contact"
      ref={revealContainer}
      className="sm:min-h-[700px] md:pt-[100px] relative overflow-x-clip"
    >
      <div className="container px-8 xl:px-44 mx-auto mb-10">
        <h3 className="text-center text-2xl md:text-3xl font-bold font-inter text-orange">
          <span className="text-light-blue">04.</span> {t('contact_heading')}
        </h3>
        <div className="text-center flex items-center flex-col my-20">
          <h2 className="font-inter font-bold text-4xl md:text-8xl text-slate-100 mb-5">
            {t('contact_hero')}
          </h2>
          <p className="font-inter font-medium text-lg text-slate-100 w-full md:w-1/2 mb-8 md:mb-16">
            {t('contact_subtitle')}
          </p>
          <a
            href="mailto:azamat.adylbekov@gmail.com"
            className="
						bg-transparent md:text-2xl text-light-blue 
						font-monaco border-solid border
						border-light-blue rounded-md py-5 px-10 regular-btn"
          >
            {t('contact_link')}
          </a>
        </div>
      </div>
      <div ref={cubeDecor.ref} className="absolute contact-cube hidden xl:block">
        <img src={whiteCube} className="blur-sm" alt="" />
      </div>
      <div ref={codeDecor.ref} className="absolute contact-code-decor hidden xl:block">
        <img src={codeDecor1} className="blur-sm" alt="" />
      </div>
    </section>
  );
}
