import { BiArrowToRight } from "react-icons/bi";
import pt from "../locale/pt.json";
import en from "../locale/en.json";
import { language } from "../util/language";

export default function BackToTop({
  isTop,
  lang,
}: {
  isTop: boolean;
  lang: language;
}) {
  return (
    <button
      style={{
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0)",
        border: 0,
        color: "#fff",
        bottom: "7rem",
        right: isTop ? "-13rem" : "-2rem",
        transition: ".3s",
        display: "flex",
        alignItems: "center",
        gap: "7px",
        zIndex: 99,
        cursor: "pointer",
      }}
      className="rotated"
      onClick={() => {
        window.scrollTo({
          behavior: "smooth",
          top: 0,
        });
      }}
    >
      <span style={{ fontSize: "2rem" }}>
        {lang == "pt" ? pt["scroll"] : en["scroll"]}
      </span>
      <BiArrowToRight size={"2rem"} color={"#fff"} />
    </button>
  );
}
