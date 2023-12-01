interface RightArticleProps {
  title: string;
  ps: string[];
  src: string;
}
export default function RightArticle({ ps, title, src }: RightArticleProps) {
  return (
    <article
      className="right_features"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 20,
      //   flexWrap: "wrap",
      //   justifyContent: "center",
      //   flexDirection: "row",
      // }}
    >
      <div className="content">
        <h2>{title}</h2>
        {ps.map((i, k) => (
          <p key={k}>{i}</p>
        ))}
      </div>
      <img
        src={src}
        alt={title}
        style={{
          maxWidth: "100%",

          borderRadius: 10,
        }}
      />
    </article>
  );
}
