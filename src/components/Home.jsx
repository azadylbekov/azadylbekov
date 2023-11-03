import { useEffect, useRef, useState, createRef } from "react";
import vectorStraight from "../assets/images/vectorStraigt.png";
import SphereSm from "../assets/images/sphere_sm.png";
import CodeDecor from "../assets/images/codeDecor1.png";
import { useParallax } from "react-scroll-parallax";
import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
import { useTranslation } from "react-i18next";
import resumeEn from '../assets/static/resumeEn.pdf';
import resumeRu from '../assets/static/resumeRu.pdf';


export default function Home() {
  const vector = useParallax({ speed: -5 });
  const sphere = useParallax({ speed: -5, scale: [1, 2] });
  const codeDecor = useParallax({ speed: 20 });
  const [isMounted, setIsMounted] = useState(false);
  const nodeRef = useRef(null);
  const [resumeLink, setResumeLink] = useState(resumeEn);


  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language == "en") {
      setResumeLink(resumeEn);
    }
    if (i18n.language == "ru") {
      setResumeLink(resumeRu);
    }
  }, [i18n.language]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const one = (
    <h3 className="text-light-blue font-monaco text-xl sm:text-2xl mt-10 mb-2 md:mb-5">
      {t("home_greetings")}
    </h3>
  );
  const two = (
    <h1 className="font-inter text-3xl sm:text-4xl md:text-6xl font-bold mb-2 name-gradient">
      {t("app_name")}
    </h1>
  );

  const three = (
    <h4 className="font-inter font-medium text-orange md:text-4xl text-2xl sm:text-3xl mb-5 md:mb-5">
      {t("home_subtitle")}
    </h4>
  );

  const four = (
    <p className="font-inter font-normal text-orange text-lg md:text-xl sm:w-96 w-full">
      {t("home_description")}
    </p>
  );

  const five = (
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="py-3 px-10 text-lg mt-10 inline-block regular-btn md:hidden"
    >
      {t("nav_resume")}
    </a>
  );

  const heroText = [
    { el: one, ref: createRef(null) },
    { el: two, ref: createRef(null) },
    { el: three, ref: createRef(null) },
    { el: four, ref: createRef(null) },
    { el: five, ref: createRef(null) },
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      <div ref={vector.ref} className="absolute home-vector hidden xl:block">
        <img src={vectorStraight} className="blur-[2px]" alt="" />
      </div>
      <div ref={sphere.ref} className="absolute home-sphere hidden xl:block">
        <img src={SphereSm} alt="" />
      </div>
      <div
        ref={codeDecor.ref}
        className="absolute home-code-decor hidden xl:block"
      >
        <img src={CodeDecor} className="blur-sm" alt="" />
      </div>

      <div className="container xl:px-44 md:mx-auto h-screen pt-0 md:pt-36 md:pt-0 px-8 md:px-10 flex items-center">
        <div className="md:mt-[-100px]">
          <TransitionGroup component={null}>
            {isMounted &&
              heroText.map((item, i) => {
                return (
                  <CSSTransition
                    nodeRef={item.ref}
                    classNames="fadeup"
                    key={i}
                    timeout={700}
                  >
                    <div
                      ref={item.ref}
                      style={{ transitionDelay: `${i + 1}00ms` }}
                    >
                      {item.el}
                    </div>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </div>
      </div>
    </section>
  );
}
