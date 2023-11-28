import { BiArrowToRight } from "react-icons/bi";
export default function BackToTop({ isTop }: { isTop: boolean }) {
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
      <span style={{ fontSize: "2rem" }}>Scroll to top</span>
      <BiArrowToRight size={"2rem"} color={"#fff"} />
    </button>
  );
}
