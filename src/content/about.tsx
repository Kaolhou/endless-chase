import { JSX } from "react";
import poster from "../assets/maxresdefault.webp";
import { language } from "../util/language";
import pt from "../locale/pt.json";
import en from "../locale/en.json";

export default function About({
  open,
  lang,
}: {
  open: (content: JSX.Element) => void;
  close: () => void;
  lang: language;
}) {
  return (
    <section
      style={{
        maxWidth: "70vw",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <article>
        <h1>{lang == "pt" ? pt["about"] : en["about"]}</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div className="content">
            <p>{lang == "pt" ? pt["about.content"] : en["about.content"]}</p>
          </div>

          <img
            src={poster}
            alt="poster"
            className="x1"
            loading="lazy"
            tabIndex={0}
            onClick={() =>
              open(
                <iframe
                  src="https://www.youtube.com/embed/CT8hUR_Bm8A?si=rcQv6g8JZSGqpxQN"
                  title="YouTube video player"
                  style={{
                    aspectRatio: "16/9",
                    flex: 1,
                    maxWidth: "50vw",
                    border: "0px",
                    width: "100%",
                    boxSizing: "border-box",
                    minWidth: "200px",
                  }}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              )
            }
            style={{ cursor: "pointer" }}
          />
        </div>
      </article>
    </section>
  );
}
