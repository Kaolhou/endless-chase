import Container from "../components/container";
import Header from "../components/header";
import MutedVideo from "../components/muted_video";
import mp4 from "../assets/LOGO_VOXELS_GIF.mp4";
import poster from "../assets/logo jogo-min.png";
import About from "../content/about";
import Footer from "../components/footer";
import BackToTop from "../components/back_to_top";
import { useEffect, useState } from "react";

export default function Main() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsTop(scrollTop < 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <main>
      <Container
        content={
          <>
            <Header />
            <BackToTop isTop={isTop} />
          </>
        }
        background={
          <MutedVideo
            src={mp4}
            poster={poster}
            style={{ width: "100%" }}
            className="background"
          />
        }
      />
      <Container content={<About />} id="about" />
      <Footer />
    </main>
  );
}
