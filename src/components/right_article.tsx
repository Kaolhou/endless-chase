import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

interface RightArticleProps {
  title: string;
  ps: string[];
  src: string;
  hash: string;
  card_style?: React.CSSProperties;
}
export default function RightArticle({
  ps,
  title,
  src,
  hash,
  card_style,
}: RightArticleProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // console.log("loaded");
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);
  console.log(card_style);
  return (
    <article className="right_features">
      {isLoaded ? (
        <img
          src={src}
          alt={title}
          loading="lazy"
          style={{
            maxWidth: "100%",
            borderRadius: 10,
          }}
        />
      ) : (
        <Blurhash
          className="blur"
          hash={hash}
          resolutionX={4}
          resolutionY={3}
          punch={1}
          style={{
            maxWidth: "100%",
            position: "relative",
            width: undefined,
            height: undefined,
            borderRadius: 10,
          }}
        />
      )}
      <div className="content" style={card_style}>
        <h2>{title}</h2>
        {ps.map((i, k) => (
          <p key={k}>{i}</p>
        ))}
      </div>
    </article>
  );
}
