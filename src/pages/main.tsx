import Container from "../components/container";
import Header from "../components/header";
import MutedVideo from "../components/muted_video";
import mp4_2k from "../assets/Loop_resized_2k.mp4";
import mp4_1080p from "../assets/Loop_resized_1080p.mp4";
import mp4_720p from "../assets/Loop_resized_720p.mp4";
import poster from "../assets/poster.jpeg";
import logo from "../assets/logo jogo-min.png";
import About from "../content/about";
import Footer from "../components/footer";
import BackToTop from "../components/back_to_top";
import { JSX, useEffect, useState } from "react";
import GlitchedButton from "../components/glitched_button";
import Features from "../content/features";
import Media from "../content/media";
import MainModal from "../components/modal";

export default function Main() {
  const [isTop, setIsTop] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpenContent, setIsOpenContent] = useState<{
    content: JSX.Element;
    isOpen: boolean;
  }>({ content: <></>, isOpen: false });
  const open = (content: JSX.Element) =>
    setIsOpenContent({ content, isOpen: true });
  const close = () => setIsOpenContent((prev) => ({ ...prev, isOpen: false }));

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10);
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <main>
      <Header isTop={isTop} />
      <BackToTop isTop={isTop} />

      <Container
        content={
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
              <img src={logo} alt="" style={{ width: "100%" }} />
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
        }
        background={
          <MutedVideo
            poster={poster}
            style={{ width: "100%" }}
            className="background"
            sources={
              <>
                <source media="(min-width: 2560px)" src={mp4_2k} />
                <source media="(min-width: 1080px)" src={mp4_1080p} />
                <source src={mp4_720p} />
              </>
            }
          />
        }
      />
      <Container
        content={<About open={open} close={close} />}
        id="about"
        center
      />
      <Container content={<Features />} id="features" />
      <Container content={<Media open={open} />} id="media" />
      <Footer />
      <MainModal
        isOpen={isOpenContent.isOpen}
        content={isOpenContent.content}
        close={close}
      />
    </main>
  );
}
