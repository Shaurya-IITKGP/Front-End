import css from "./comingSoon.module.css";

function ComingSoon() {
  return (
    <>
      <div className="text-center h-full w-full pt-20">
        <p className={css.shining_text_animation}>Coming</p>
        <p className={css.shining_text_animation}>Soon</p>
      </div>
    </>
  );
}

export default ComingSoon;
