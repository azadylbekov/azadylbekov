import React, { useEffect, useState, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";
import { Turn as Hamburger } from "hamburger-react";
import { useClickAway } from "@uidotdev/usehooks";
import { NAV_LINKS } from "../../data/data";
import resumeEn from '../../assets/static/resumeEn.pdf';
import resumeRu from '../../assets/static/resumeRu.pdf';



export default function Navbar({ mobileNavToggle, mouseToBottom }) {
  const [isMounted, setIsMounted] = useState(false);
  const resumeRef = createRef(null);
  const [resumeLink, setResumeLink] = useState(resumeEn);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsMobileNavOpen(false);
  });

  const langOptions = [
    { value: "en", label: "English" },
    { value: "ru", label: "Russian" },
  ];
  const [langOption, setLangOption] = useState({
    value: "en",
    label: "English",
  });
  
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (i18n.language == "en") {
      setResumeLink(resumeEn);
    }
    if (i18n.language == "ru") {
      setResumeLink(resumeRu);
    }
  }, [i18n.language]);

  const changeLangOption = (e) => {
    setLangOption(e);
    i18n.changeLanguage(e.value);
  };

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    mobileNavToggle(isMobileNavOpen);
  }, [isMobileNavOpen]);

  return (
    <>
      <div className="max-[960px]:hidden xl:mr-24">
        <ul className="flex items-center">
          <Navlinks isMounted={isMounted} />
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                nodeRef={resumeRef}
                classNames="fadedown"
                timeout={700}
              >
                <li
                  ref={resumeRef}
                  style={{ transitionDelay: 100 * NAV_LINKS.length + "ms" }}
                  className="mr-7"
                >
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-10 regular-btn"
                  >
                    {t("nav_resume")}
                  </a>
                </li>
              </CSSTransition>
            )}
          </TransitionGroup>
          <li>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "transparent",
                  width: 120 + "px",
                  borderWidth: "0 !important",
                  outline: "none",
                  boxShadow: "none",
                  fontFamily: "Inter",
                }),
                singleValue: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "#fff",
                }),
              }}
              value={langOption}
              options={langOptions}
              onChange={changeLangOption}
            />
          </li>
        </ul>
      </div>
      <div className="block lg:hidden">
        {!isMobileNavOpen && (
          <button
            style={{ top: mouseToBottom ? "-40px" : "15px" }}
            className={styles.mobileNavBtn}
            id="mobile-nav-toggle"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <Hamburger
              color="#F27D42"
              direction="right"
              toggled={isMobileNavOpen}
            />
          </button>
        )}
      </div>
      <div
        style={{ right: isMobileNavOpen ? "0" : "-300px" }}
        className={styles.mobileNav + " lg:hidden"}
        ref={ref}
      >
        <button
          style={{ top: mouseToBottom ? "-40px" : "15px" }}
          className={styles.mobileNavBtn}
          id="mobile-nav-toggle"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <Hamburger
            color="#F27D42"
            direction="right"
            toggled={isMobileNavOpen}
          />
        </button>
        <ul>
          {NAV_LINKS.map((link, index) => {
            return (
              <li key={index}>
                <a
                  onClick={() => setIsMobileNavOpen(false)}
                  className="text-slate-100 font-inter font-bold text-2xl hover:text-light-blue duration-300"
                  href={link.link}
                >
                  <span className="mr-2 text-lg font-monaco text-light-blue">
                    {link.order}
                  </span>
                  {t(link.lang)}
                </a>
              </li>
            );
          })}
          <li className="">
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "transparent",
                  width: 150 + "px",
                  borderWidth: "0 !important",
                  outline: "none",
                  boxShadow: "none",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "bold",
                }),
                singleValue: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "#fff",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "#000",
                }),
              }}
              value={langOption}
              options={langOptions}
              onChange={changeLangOption}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

function Navlinks({ isMounted }) {
  const { t } = useTranslation();

  return (
    <TransitionGroup component={null}>
      {isMounted &&
        NAV_LINKS.map((link, index) => {
          return (
            <CSSTransition
              key={link.order}
              timeout={700}
              classNames="fadedown"
              nodeRef={link.ref}
            >
              <li
                ref={link.ref}
                className="mr-7 flex items-center"
                style={{ transitionDelay: 100 * index + "ms" }}
              >
                <a
                  href={link.link}
                  className="text-orange font-monaco font-bold navbar-link"
                >
                  <span className="text-light-blue inline-block mr-2">
                    {link.order}
                  </span>
                  {t(link.lang)}
                </a>
              </li>
            </CSSTransition>
          );
        })}
    </TransitionGroup>
  );
}

