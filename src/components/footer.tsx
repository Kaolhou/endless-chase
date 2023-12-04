import LinkList from "./link_list";

export default function Footer() {
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
          <h2>Navigation</h2>
          <ul>
            <LinkList
              content="Home"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              url="#home"
            />
            <LinkList
              content="About"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              url="#about"
            />
            <LinkList
              content="Features"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              url="#features"
            />
            <LinkList
              content="Media"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              url="#media"
            />
          </ul>
        </article>
        <article>
          <h2>Teste</h2>
          <ul>
            <LinkList
              content="Teste"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              target="_blank"
            />
            <LinkList
              content="Teste"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              target="_blank"
            />
          </ul>
        </article>
        <article>
          <h2>teste</h2>
          <ul>
            <LinkList
              content="Teste"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              target="_blank"
            />
          </ul>
        </article>
      </section>
      <section style={{ textAlign: "center" }}>
        <span>
          <span>All rights reserved. Copyright&copy; </span>
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
