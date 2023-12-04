// import { useEffect, useState } from "react";
import useLoadImage from "../components/useLoadImage";
import { Blurhash } from "react-blurhash";
import import_images from "../util/import_images";

export interface ImgCardProps {
  src: string;
  alt: string;
  card: string;
  onClick: () => void;
  hash: string;
}
function ImgCard({ alt, onClick, card, hash }: ImgCardProps) {
  const loaded = useLoadImage(card);
  return loaded ? (
    <span className="img_card">
      <img src={card} alt={alt} onClick={onClick} />
    </span>
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
        display: "block",
        width: undefined,
        height: undefined,
        borderRadius: 10,
      }}
    />
  );
}

export default function Media({
  open,
}: {
  open: (content: JSX.Element) => void;
}) {
  return (
    <section className="media" style={{ maxWidth: "70vw", margin: "auto" }}>
      <h1>Media</h1>
      <div className="grid">
        {import_images.map((i, key) => (
          <ImgCard
            hash={i.hash}
            card={i.card}
            key={key}
            src={i.src}
            alt={i.alt}
            onClick={() =>
              open(
                <img
                  src={i.src}
                  alt={i.alt}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    paddingBottom: "2rem",
                  }}
                />
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
