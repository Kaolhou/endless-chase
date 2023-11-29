import { JSX } from "react";
// import teste2 from "../assets/placeholder/ab67616d0000b273b1f8da74f225fa1225cdface.jpg";

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
            src="https://i.ytimg.com/vi/7WDQBKaPVeg/maxresdefault.jpg"
            alt=""
            className="x1"
            onClick={() =>
              open(
                <iframe
                  style={{
                    aspectRatio: "16/9",
                    flex: 1,
                    maxWidth: "50vw",
                    border: "0px",
                  }}
                  src="https://www.youtube.com/embed/7WDQBKaPVeg?si=S23qfe784wDrAXVY"
                  title="YouTube video player"
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
