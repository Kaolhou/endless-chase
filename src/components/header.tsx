import logo from "../assets/algo-ai-brush-removebg-4pn9dlk.png";
import LinkList from "./link_list";

export default function Header() {
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
        padding: "1rem",

        justifyContent: "space-between",
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
        <ul style={{ display: "flex", gap: 10 }}>
          <LinkList content="Teste" className="f_medium" />
          <LinkList content="Teste" className="f_medium" />
          <LinkList content="Teste" className="f_medium" />
        </ul>
      </nav>
    </header>
  );
}
