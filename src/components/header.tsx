import logo from "../assets/icons/algo-ai-brush-removebg-4pn9dlk.png";
import LinkList from "./link_list";

export default function Header({ isTop }: { isTop: boolean }) {
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
            <LinkList content="About" className="f_medium" url="#about" />
            <LinkList content="Features" className="f_medium" url="#features" />
            <LinkList content="Media" className="f_medium" url="#media" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
