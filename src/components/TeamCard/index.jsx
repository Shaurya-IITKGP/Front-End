import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";
import css from "./TeamsPage.module.css";
import { Link } from "react-router-dom";

export const TeamCard = ({
  name,
  designation,
  image,
  linkedin,
  mail,
  facebook,
  instagram,
}) => {
  return (
    <div className={`max-w-xs min-w-[150px] ${css.speakerBlock}`}>
      <div className={`rounded-xl ${css.innerBox}`}>
        <div className={`rounded-xl ${css.imageBox}`}>
          <div className={`rounded-xl ${css.image}`}>
            <img loading="lazy" src={image} alt={name} />
            {(mail || linkedin || instagram || facebook) && (
              <div className={css.socialLinks}>
                <ul className="flex justify-center items-center gap-2 wrap">
                  <Socials
                    linkedin={linkedin}
                    mail={mail}
                    facebook={facebook}
                    instagram={instagram}
                  />
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={css.captionBox}>
          <h4 className={`font-bold ${css.name}`}>{name}</h4>
          <span className={`font-bold ${css.designation}`}>{designation}</span>
        </div>
      </div>
    </div>
  );
};

const Socials = ({ linkedin, mail, facebook, instagram }) => {
  return (
    <>
      {mail && (
        <a href={`mailto:${mail}`}>
          <RiMailFill className={"text-2xl cursor-pointer " + css.icon} />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank">
          <RiLinkedinBoxFill
            className={"text-2xl cursor-pointer " + css.icon}
          />
        </a>
      )}
      {facebook && (
        <a href={facebook} target="_blank">
          <RiFacebookBoxFill
            className={"text-2xl cursor-pointer " + css.icon}
          />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank">
          <RiInstagramFill className={"text-2xl cursor-pointer " + css.icon} />
        </a>
      )}
    </>
  );
};
