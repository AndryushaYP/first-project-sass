import "./TypeSection.scss";

function TypeSection({
  isDark,
  img,
  prevSub,
  prevTitle,
  prevDescription,
  infoTitle,
  infoTextOne,
  infoTextTwo,
}) {
  return (
    <section className={isDark ? "type-section type-section_dark" : "type-section"}>
      <div className={isDark ? "type-section__preview type-section__preview_dark" : "type-section__preview"}>
        <img src={img} alt={prevTitle} className="type-section__image"></img>
        <div className="preview">
          <p className={isDark ? "preview__subtitle preview__subtitle_dark" : "preview__subtitle"}>
            {prevSub}
          </p>
          <h2 className={isDark ? "preview__title preview__title_dark" : "preview__title"}>
            {prevTitle}
          </h2>
          <p
            className={
              isDark ? "preview__description preview__description_dark" : "preview__description"
            }
          >
            {prevDescription}
          </p>
        </div>
      </div>
      <div className="information">
        <h2
          className={isDark ? "information__title information__title_dark" : "information__title"}
        >
          {infoTitle}
        </h2>
        <p className={isDark ? "information__text information__text_dark" : "information__text"}>
          {infoTextOne}
        </p>
        <p className={isDark ? "information__text information__text_dark" : "information__text"}>
          {infoTextTwo}
        </p>
      </div>
    </section>
  );
}

export default TypeSection;
