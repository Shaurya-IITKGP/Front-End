import css from "./comingSoon.module.css";
import Navbar from "../../components/Navbar/Navbar";

function ComingSoon() {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="text-center pt-20">
          <p className={css.shining_text_animation}>Coming</p>
          <p className={css.shining_text_animation}>Soon</p>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
