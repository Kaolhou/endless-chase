import GlitchedButton from "../components/glitched_button";
import logo from "../assets/logo jogo-min.png";

interface MainProps {
  scrollTop: number;
}
export default function Main({ scrollTop }: MainProps) {
  return (
    <section
      style={{
        margin: "auto",
        display: "flex",
        maxWidth: "40rem",
        height: "90vh",
        justifyContent: "center",
        flexDirection: "column",
        opacity: 1 - scrollTop / window.innerHeight,
      }}
    >
      <div style={{ width: "100%" }}>
        <img src={logo} alt="logo" style={{ width: "100%" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <GlitchedButton
          title="Watch Trailer"
          alternative="Endless"
          url="#about"
        />
        <GlitchedButton
          title="Press Kit"
          alternative="Chase"
          url="https://impress.games/press-kit/voxels-entertainment/endless-chase"
          target="_blank"
        />
      </div>
    </section>
  );
}
