import React from "react";
import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS } from "../data/data";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="container px-10 xl:px-44 mx-auto mb-5">
      <div className="flex lg:hidden justify-center gap-x-5 mb-5">
        {SOCIAL_LINKS.map((link, index) => {
          return (
            <a className="text-slate-50 text-3xl" key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          );
        })}
      </div>
      <p className="font-inter text-lg md:text-xl text-slate-200 text-center">
        {t("footer_text")}
      </p>
    </footer>
  );
}
