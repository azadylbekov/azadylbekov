import React from "react";
import styles from "./LeftFixed.module.scss";
import { SOCIAL_LINKS } from "../../data/data";


const LeftFixed = React.forwardRef((props, ref) => {
  return (
    <div className={styles.leftFixed} ref={ref}>
      <div className="flex flex-col">
        {SOCIAL_LINKS.map((link, i) => {
          return (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          )
        })}
      </div>
    </div>
  );
});

export default LeftFixed;
