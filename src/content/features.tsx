import explore from "../assets/prints/Explore os Mundos.webp";
import LeftArticle from "../components/left_article";
import conquer from "../assets/prints/Conquiste Poderes.webp";
import demonstrate from "../assets/prints/Demonstre sua flexibilidade.webp";
import travel from "../assets/prints/Viagem no tempo.webp";

import RightArticle from "../components/right_article";
import { language } from "../util/language";
import pt from "../locale/pt.json";
import en from "../locale/en.json";

export default function Features({ lang }: { lang: language }) {
  return (
    <section style={{ maxWidth: "70vw", margin: "auto" }}>
      <h1>{lang == "pt" ? pt["features"] : en["features"]}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <RightArticle
          hash="L7Cim:-@O@Bf^nVa_2Ew4VIAD%E2"
          ps={[
            lang == "pt"
              ? pt["features.explore.content"]
              : en["features.explore.content"],
          ]}
          title={lang == "pt" ? pt["features.explore"] : en["features.explore"]}
          src={explore}
          // card_style={{ transform: "translate(-80%,00%)" }}
        />
        <LeftArticle
          hash="LEDRg3{x5;10PnNZn+Vtm+T0R*#+"
          title={lang == "pt" ? pt["features.conquer"] : en["features.conquer"]}
          src={conquer}
          ps={[
            lang == "pt"
              ? pt["features.conquer.content"]
              : en["features.conquer.content"],
          ]}
        />
        <RightArticle
          hash="L17Tqboet7X9]h9t0fNx009t0zNG"
          ps={[
            lang == "pt"
              ? pt["features.demonstrate.content"]
              : en["features.demonstrate.content"],
          ]}
          title={
            lang == "pt"
              ? pt["features.demonstrate"]
              : en["features.demonstrate"]
          }
          src={demonstrate}
          card_style={{ transform: "translate(-90%,-30%)" }}
        />
        <LeftArticle
          hash="LH6[w2yEMcMd*0yDeTR5yDx^kWRP"
          title={lang == "pt" ? pt["features.travel"] : en["features.travel"]}
          src={travel}
          ps={[
            lang == "pt"
              ? pt["features.travel.content1"]
              : en["features.travel.content1"],
            lang == "pt"
              ? pt["features.travel.content2"]
              : en["features.travel.content2"],
          ]}
        />
      </div>
    </section>
  );
}
