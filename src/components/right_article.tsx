import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

interface RightArticleProps {
  title: string;
  ps: string[];
  src: string;
  hash: string;
}
export default function RightArticle({
  ps,
  title,
  src,
  hash,
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
    </article>
  );
}
