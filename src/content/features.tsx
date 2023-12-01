import explore from "../assets/prints/Explore os Mundos.webp";
import LeftArticle from "../components/left_article";
import conquer from "../assets/prints/Conquiste Poderes.webp";
import demonstrate from "../assets/prints/Demonstre sua flexibilidade.webp";
import travel from "../assets/prints/Viagem no tempo.webp";

import RightArticle from "../components/right_article";

export default function Features() {
  return (
    <section style={{ maxWidth: "70vw", margin: "auto" }}>
      <h1>Features</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <RightArticle
          ps={[
            "Interact with locals, collect unique items, and discover secrets beyond your imagination.",
          ]}
          title="Explore the Worlds"
          src={explore}
        />
        <LeftArticle
          title="Conquer Powers"
          src={conquer}
          ps={[
            "Obtain powerful runes that contain ancient knowledge, complete your quests, and gain new powers to win your battles.",
          ]}
        />
        <RightArticle
          ps={[
            "Be skillful and prove you can win in 5 different genres:",
            "Stealth, Action and Adventure, Hack n Slash, Survivor Horror and Bullet Hell",
          ]}
          title="Demonstrate your flexibility"
          src={demonstrate}
        />
        <LeftArticle
          title="Travel through time and space"
          src={travel}
          ps={[
            "Make the right choices and travel the worlds to evolve your character",
            "Discover the story behind the mysteries of Time.",
          ]}
        />

        {/* <article
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div className="content">
            <h2>Explore the Worlds</h2>
            <p>
              Interact with locals, collect unique items, and discover secrets
              beyond your imagination.
            </p>
          </div>
          <img
            src={explore}
            alt="Explore the Worlds"
            style={{ maxWidth: "50rem", width: "100%", borderRadius: 10 }}
          />
        </article>
        <article
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row-reverse",
          }}
        >
          <div className="content">
            <h2>Conquer Powers</h2>
            <p>
              Obtain powerful runes that contain ancient knowledge, complete
              your quests, and gain new powers to win your battles.
            </p>
          </div>
          <img
            src={conquer}
            alt="Conquer Powers"
            style={{ maxWidth: "50rem", width: "100%", borderRadius: 10 }}
          />
        </article>
        <article
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div className="content">
            <h2>Demonstrate your flexibility</h2>
            <p>Be skillful and prove you can win in 5 different genres:</p>
            <p>
              Stealth, Action and Adventure, Hack n Slash, Survivor Horror and
              Bullet Hell
            </p>
          </div>
          <img
            src={demonstrate}
            alt="Demonstrate your flexibility"
            style={{ maxWidth: "50rem", width: "100%", borderRadius: 10 }}
          />
        </article>
        <article
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row-reverse",
          }}
        >
          <div className="content">
            <h2>Travel through time and space</h2>
            <p>
              Make the right choices and travel the worlds to evolve your
              character
            </p>
            <p>Discover the story behind the mysteries of Time.</p>
          </div>
          <img
            src={travel}
            alt="Travel through time and space"
            style={{ maxWidth: "50rem", width: "100%", borderRadius: 10 }}
          />
        </article> */}
      </div>
    </section>
  );
}
