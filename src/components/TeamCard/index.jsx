import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";
import css from "./TeamsPage.module.css";
import { Link } from "react-router-dom";

export const TeamCard = ({ name, designation, image, linkedin, mail, facebook, instagram }) => {
  return (
    <div className={`max-w-xs min-w-[150px] ${css.speakerBlock}`}>
      <div className={css.innerBox}>
        <div className={css.imageBox}>
          <div className={css.image}>
            <img loading="lazy" src={image} alt={name} />
            <div className={css.socialLinks}>
              <ul className="flex justify-center items-center gap-2 wrap">
                <Socials linkedin={linkedin} mail={mail} facebook={facebook} instagram={instagram} />
              </ul>
            </div>
          </div>
        </div>
        <div className={css.captionBox}>
          <h4 className={css.name}>
            {name}
          </h4>
          <span className={css.designation}>{designation}</span>
        </div>
      </div>
    </div>
  );
};

const Socials = ({ linkedin, mail, facebook, instagram }) => {
  return (
    <>
      <a href={`mailto:${mail}`}>
        <RiMailFill className={"cursor-pointer " + css.icon} size={"1.5rem"} />
      </a>
      <a href={linkedin} target="_blank">
        <RiLinkedinBoxFill className={"cursor-pointer " + css.icon} size={"1.5rem"} />
      </a>
      <a href={facebook} target="_blank">
        <RiFacebookBoxFill className={"cursor-pointer " + css.icon} size={"1.5rem"} />
      </a>
      <a href={instagram} target="_blank">
        <RiInstagramFill className={"cursor-pointer " + css.icon} size={"1.5rem"} />
      </a>
    </>
  );
};
