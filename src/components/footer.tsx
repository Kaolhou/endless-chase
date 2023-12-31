import { language } from "../util/language";
import CopyToClipboard from "./copy_to_clipboard";
import LinkList from "./link_list";
import pt from "../locale/pt.json";
import en from "../locale/en.json";

export default function Footer({ lang }: { lang: language }) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(anchor.getAttribute("href")!)!.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <footer
      style={{
        MozBoxSizing: "border-box",
        backgroundColor: "#0f172a",
        marginTop: "5rem",
        paddingTop: "5rem",
        paddingBottom: "2rem",
        boxShadow: "0px -10px 130px #1e293b",
      }}
    >
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "80vw",
          margin: "auto",
          justifyContent: "space-evenly",
          borderBottom: "2px solid #e4e4e7",
          marginBottom: "2rem",
          paddingBottom: "1rem",
        }}
      >
        <article>
          <h2>{lang == "pt" ? pt["footer.nav"] : en["footer.nav"]}</h2>
          <ul>
            <LinkList
              content={lang == "pt" ? pt["home"] : en["home"]}
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              url="#home"
            />
            <LinkList
              content={lang == "pt" ? pt["header.about"] : en["header.about"]}
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              url="#about"
            />
            <LinkList
              content={
                lang == "pt" ? pt["header.features"] : en["header.features"]
              }
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              url="#features"
            />
            <LinkList
              content={lang == "pt" ? pt["header.media"] : en["header.media"]}
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              url="#media"
            />
          </ul>
        </article>
        <article>
          <h2>{lang == "pt" ? pt["footer.follow"] : en["footer.follow"]}</h2>
          <ul>
            <LinkList
              content="Linkedin"
              url="https://www.linkedin.com/company/voxels-entertainment-and-games-ltda/?viewAsMember=true"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              target="_blank"
            />
            <LinkList
              content="YouTube"
              target="_blank"
              url="https://www.youtube.com/@voxelsentertainmentandgame9389"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content="Press Kit"
              target="_blank"
              url="https://impress.games/press-kit/voxels-entertainment/endless-chase"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
            />
          </ul>
        </article>
        <article>
          <h2>{lang == "pt" ? pt["us"] : en["us"]}</h2>
          <ul>
            <CopyToClipboard
              isLi={true}
              isSpan={true}
              text="contact@voxels3dstudio.page"
            />
          </ul>
        </article>
      </section>
      <section style={{ textAlign: "center" }}>
        <span>
          <span>
            {lang == "pt" ? pt["footer.copy"] : en["footer.copy"]}&copy;{" "}
          </span>
          <LinkList
            isSpan
            content="Voxels Entertainment"
            style={{ display: "inline-block" }}
            target="_blank"
            onClick={() => window.open("https://voxelsentertainment.com/")}
          />
        </span>
      </section>
    </footer>
  );
}
