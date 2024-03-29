import React from "react";
import menu from "../../img/menu.png";
import telegram from "../../img/telegram.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import css from "./about.module.scss";

const About = () => {
  return (
    <div className={css.conteiner}>
      <div className={css.image_container}></div>
      <div className={css.text_box}>
        <img src={menu} alt="open_menu" className={css.icon_menu} />
        <h1 className={css.tittle}>Hello, my name is Viacheslav Rashnyk</h1>
        <p className={css.text}>I am Full Stack Developer</p>
        <button className={css.button}>
          <span>About Me</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>

      <ul className={css.wrapper}>
        <li className={`${css.icon} ${css.github}`}>
          <span className={css.tooltip}>Github</span>
          <a href="https://github.com/Vasheslav">
            <img src={github} alt="github" className={css.icon_contact} />
          </a>
        </li>
        <li className={`${css.icon} ${css.linkedin}`}>
          <span className={css.tooltip}>Linkedin</span>
          <a href="https://www.linkedin.com/in/viacheslav-rashnyk-7b3825271/">
            <img src={linkedin} alt="linkedin" className={css.icon_contact} />
          </a>
        </li>
        <li className={`${css.icon} ${css.telegram}`}>
          <span className={css.tooltip}>Telegram</span>
          <a href="https://t.me/viasheslav_r">
            <img src={telegram} alt="telegram" className={css.icon_contact} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
