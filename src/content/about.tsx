import { JSX } from "react";
import poster from "../assets/maxresdefault.webp";

export default function About({
  open,
}: {
  open: (content: JSX.Element) => void;
  close: () => void;
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
        <h1>About Endless Chase</h1>
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
            <p>
              Endless Chase is a Sci-fi punk with time travel in Real Time RPG
              bringing a differentiated gameplay experience using 5 core loops
              strategically distributed in the 4 acts of the Kishotenketsu
              narrative integrated into the game's Lore.
            </p>
          </div>

          <img
            src={poster}
            alt="poster"
            className="x1"
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
