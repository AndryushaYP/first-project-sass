import "./Main.scss";
import { cognitiveTypes } from "../../constants/constants";
import VideoSection from "../VideoSection/VideoSection";
import TypesSection from "../TypesSection/TypesSection";
import TypeSection from "../TypeSection/TypeSection";

function Main() {
  return (
    <main className="main">
      <VideoSection />
      <TypesSection />
      {cognitiveTypes.map((item) => (
        <TypeSection
          isDark={item.isDark}
          img={item.img}
          prevSub={item.prevSub}
          prevTitle={item.prevTitle}
          prevDescription={item.prevDescription}
          infoTitle={item.infoTitle}
          infoTextOne={item.infoTextOne}
          infoTextTwo={item.infoTextTwo}
        />
      ))}
    </main>
  );
}

export default Main;
