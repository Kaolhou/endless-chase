import teste from "../assets/placeholder/AM.jpeg";
// import teste2 from "../assets/placeholder/ab67616d0000b273b1f8da74f225fa1225cdface.jpg";

export default function About() {
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
      <h1>About Endless Chase</h1>
      <article
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "space-between",
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
        <img src={teste} alt="" className="x1" />
      </article>
    </section>
  );
}
