import { useState } from "react";
import teste from "../assets/placeholder/AM.jpeg";
import MainModal from "../components/modal";
// import teste2 from "../assets/placeholder/ab67616d0000b273b1f8da74f225fa1225cdface.jpg";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
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
            src={teste}
            alt=""
            className="x1"
            onClick={open}
            style={{ cursor: "pointer" }}
          />
        </div>
      </article>

      <MainModal isOpen={isOpen} close={close} />
    </section>
  );
}
