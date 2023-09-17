import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";
import css from "./TeamsPage.module.css";
import { Link } from "react-router-dom";

export const TeamCard = ({ name, designation, image }) => {
  return (
    <div className={`max-w-xs min-w-[150px] ${css.speakerBlock}`}>
      <div className={css.innerBox}>
        <div className={css.imageBox}>
          <div className={css.image}>
            <img src={image} alt="" />
            <div className={css.socialLinks}>
              <ul className="flex justify-center items-center gap-2 wrap">
                <Socials />
              </ul>
            </div>
          </div>
        </div>
        <div className={css.captionBox}>
          <h4 className={css.name}>
            <a href="#">{name}</a>
          </h4>
          <span className={css.designation}>{designation}</span>
        </div>
      </div>
    </div>
  );
};

const Socials = ({linkedin, mail, facebook, instagram}) => {
  return (
    <>
    <Link to={mail}>
      <RiMailFill className={"cursor-pointer " + css.icon} size={"1.5rem"}  />
      </Link>
      <Link to={linkedin}>
      <RiLinkedinBoxFill className={"cursor-pointer " + css.icon}  size={"1.5rem"} />
      </Link>
      <Link to={facebook}>
      <RiFacebookBoxFill className={"cursor-pointer " + css.icon}  size={"1.5rem"} />
      </Link>
      <Link to={instagram}>
      <RiInstagramFill className={"cursor-pointer " + css.icon}  size={"1.5rem"} />
      </Link>
    </>
  );
};
