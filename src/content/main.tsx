import GlitchedButton from "../components/glitched_button";
import logo from "../assets/icons/image.webp";
import { useEffect, useState } from "react";

interface MainProps {
  scrollTop: number;
}
export default function Main({ scrollTop }: MainProps) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      style={{
        margin: "auto",
        display: "flex",
        maxWidth: "40rem",
        height: "90vh",
        justifyContent: "space-between",
        flexDirection: "column",
        opacity: 1 - scrollTop / window.innerHeight,
      }}
      id="home"
    >
      <div
        style={{ width: "100%", opacity: dimensions.width < 880 ? "0" : "1" }}
      >
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
