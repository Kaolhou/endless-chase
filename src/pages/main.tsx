import Container from "../components/container";
import Header from "../components/header";
import MutedVideo from "../components/muted_video";
import mp4_1080p from "../assets/LOOP 2 - Compressed with FlexClip (online-video-cutter.com)_108p.mp4";
import mp4_720p from "../assets/LOOP 2 - Compressed with FlexClip (online-video-cutter.com).mp4";
import poster from "../assets/poster2.jpeg.webp";
import About from "../content/about";
import Footer from "../components/footer";
import BackToTop from "../components/back_to_top";
import { JSX, useEffect, useState } from "react";
import Features from "../content/features";
import Media from "../content/media";
import MainModal from "../components/modal";
import MainContent from "../content/main";
import SocialMedia from "../components/social_media";
import { language } from "../util/language";
import { useStateStorage } from "../util/useStateStorage";
import mp4_mobile from "../assets/Unreal.mp4";
import poster_mobile from "../assets/poster_mobile.jpeg";

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

  const steamPage = "";

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10);
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [lang, setLang] = useStateStorage<language>("lang", "en");
  return (
    <main>
      <div className="parallax"></div>
      <Header isTop={isTop} lang={lang} />
      <BackToTop lang={lang} isTop={isTop} />
      <SocialMedia setLang={setLang} isTop={isTop} steamPage={steamPage} />

      <Container
        style={{ margin: "0" }}
        content={
          <MainContent
            lang={lang}
            steamPage={steamPage}
            scrollTop={scrollTop}
          />
        }
        id="main"
        background={
          <MutedVideo
            poster={poster}
            posterMobile={poster_mobile}
            style={{ width: "100%" }}
            className="background"
            sources={
              <>
                <source
                  media="(min-width: 1080px)"
                  src={mp4_1080p}
                  type="video/mp4"
                />
                <source
                  media="(min-width: 520px)"
                  src={mp4_720p}
                  type="video/mp4"
                />
                <source src={mp4_mobile} type="video/mp4" />
              </>
            }
          />
        }
      />
      <Container
        content={<About open={open} lang={lang} close={close} />}
        id="about"
        center
      />
      <Container
        content={<Features lang={lang} />}
        style={{ padding: "7rem 0" }}
        id="features"
      />
      <Container
        content={<Media lang={lang} open={open} />}
        id="media"
        style={{ padding: "7rem 0" }}
      />
      <Footer lang={lang} />
      <MainModal
        isOpen={isOpenContent.isOpen}
        content={isOpenContent.content}
        close={close}
      />
    </main>
  );
}
