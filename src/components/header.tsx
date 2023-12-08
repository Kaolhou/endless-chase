import logo from "../assets/icons/algo-ai-brush-removebg-4pn9dlk_resized.webp";
import { language } from "../util/language";
import LinkList from "./link_list";
import pt from "../locale/pt.json";
import en from "../locale/en.json";

export default function Header({
  isTop,
  lang,
}: {
  isTop: boolean;
  lang: language;
}) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(anchor.getAttribute("href")!)!.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        // padding: "1rem",
        position: "fixed",
        zIndex: 20,
        top: 0,
        left: 0,
        margin: "0",
        width: "100vw",
        backgroundColor: isTop ? "rgba(0,0,0,0)" : "#111827",
        transition: ".3s",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            maxWidth: "15rem",
          }}
          className="pulse"
        />
        <nav>
          <ul style={{ display: "flex", gap: 10, margin: 0, padding: 0 }}>
            <LinkList
              content={lang == "pt" ? pt["header.about"] : en["header.about"]}
              className="f_medium"
              url="#about"
            />
            <LinkList
              content={
                lang == "pt" ? pt["header.features"] : en["header.features"]
              }
              className="f_medium"
              url="#features"
            />
            <LinkList
              content={lang == "pt" ? pt["header.media"] : en["header.media"]}
              className="f_medium"
              url="#media"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
