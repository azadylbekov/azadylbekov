import { useRef, useEffect } from "react";
import avatar from "../../assets/images/avatar.jpg";
import styles from "./About.module.scss";
import Skillset from "../Skillset.jsx";
import { SKILLS } from "../../const/skills.js";
import codeDecor2 from "../../assets/images/codeDecor2.png";
import ScrollReveal from "scrollreveal";
import { srConfig } from "../../utils/config.js";
import { useParallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";


export default function () {
  const revealContainer = useRef(null);
  const skillSetReveal = useRef(null);
  const codeDecor = useParallax({ speed: 20 });

  const { t } = useTranslation();

  useEffect(() => {
    ScrollReveal().reveal(revealContainer.current, srConfig());
    ScrollReveal().reveal(skillSetReveal.current, srConfig());
  }, []);

  return (
    <section id="about" className="min-h-[700px] pt-5 md:pt-[100px] relative" ref={revealContainer}>
      <div className="container px-8 md:px-16 xl:px-44 mx-auto mb-10">
        <div className="flex items-center mb-10">
          <h2 className="shrink-0 mr-10 text-2xl font-bold font-inter text-orange">
            <span className="text-light-blue">01.</span> {t('about_heading')}
          </h2>
          <div className="bg-slate-500 h-px w-full"></div>
        </div>
        <div className="flex mb-12 flex-wrap-reverse md:flex-nowrap">
          <div className="basis-full md:basis-3/5">
            <p className="w-full md:w-5/6 font-inter text-slate-200 text-lg mb-3">
              {t('about_para1')}
            </p>
            <p className="w-full md:w-5/6 font-inter text-slate-200 text-lg mb-3">
              {t('about_para2')}
            </p>
            <p className="w-full md:w-1/2 font-inter text-slate-200 text-lg mb-2">
              {t('about_para3')}
            </p>
          </div>
          <div className="basis-full md:basis-2/5 flex justify-start md:justify-end mb-10 md:mb-0">
            <div className={styles.avatarWrapper}>
              <img className={styles.avatar} src={avatar} alt="" />
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto flex-nowrap sm:flex-wrap" ref={skillSetReveal}>
          {SKILLS.map((skill) => {
            return (
              <div key={skill.title} className="min-w-[50%] sm:min-w-[0] sm:basis-1/4 md:basis-1/8">
                <Skillset title={skill.title} image={skill.logo} />
              </div>
            );
          })}
        </div>
      </div>
      <div ref={codeDecor.ref} className="absolute hidden xl:block about-code-decor">
        <img src={codeDecor2} className="blur-sm" alt="" />
      </div>
    </section>
  );
}
