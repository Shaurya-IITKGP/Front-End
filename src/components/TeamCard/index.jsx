import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";
import css from "./TeamsPage.module.css";

export const TeamCard = ({ name, designation, image }) => {
  return (
    <div className={`max-w-xs min-w-[150px] ${css.speakerBlock}`}>
      <div className={css.innerBox}>
        <div className={css.imageBox}>
          <div className={css.image}>
            <img src={image} alt="" />
            <div className={css.socialLinks}>
              <ul>
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

const Socials = () => {
  return (
    <>
      <li>
        <a>
          <RiMailFill size={"2rem"} />
        </a>
      </li>
      <li>
        <a>
          <RiLinkedinBoxFill size={"2rem"} />
        </a>
      </li>
      <li>
        <a>
          <RiFacebookBoxFill size={"2rem"} />
        </a>
      </li>
      <li>
        <a>
          <RiInstagramFill size={"2rem"} />
        </a>
      </li>
    </>
  );
};
