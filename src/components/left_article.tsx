interface LeftArticleProps {
  title: string;
  ps: string[];
  src: string;
}
export default function LeftArticle({ ps, title, src }: LeftArticleProps) {
  return (
    <article className="left_features">
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
