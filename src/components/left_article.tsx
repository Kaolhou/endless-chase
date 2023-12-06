import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

interface LeftArticleProps {
  title: string;
  ps: string[];
  src: string;
  hash: string;
}
export default function LeftArticle({
  ps,
  title,
  src,
  hash,
}: LeftArticleProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <article className="left_features">
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
          hash={hash}
          resolutionX={4}
          resolutionY={3}
          punch={1}
          className="blur"
          style={{
            maxWidth: "100%",
            position: "relative",
            width: undefined,
            height: undefined,
            borderRadius: 10,
          }}
        />
      )}
      <div className="content">
        <h2>{title}</h2>
        {ps.map((i, k) => (
          <p key={k}>{i}</p>
        ))}
      </div>
    </article>
  );
}
