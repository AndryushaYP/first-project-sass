import "./VideoSection.scss";

function VideoSection() {
  return (
    <section className="video-section">
      <h2 className="video-section__title">
        Что же это такое, <br />
        <span className="video-section__title-span">когнитивные искажения?</span>
      </h2>
      <p className="video-section__subtitle">Что такое когнитивные искажения. Petrovna Channel</p>
      <iframe
        className="video-section__video"
        width="919"
        height="569"
        src="https://www.youtube.com/embed/Wc42EQ6WwrQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </section>
  );
}

export default VideoSection;
