import teste from "../assets/poster.jpeg";

interface ImgCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}
function ImgCard({ alt, src, onClick }: ImgCardProps) {
  return (
    <span>
      <img src={src} alt={alt} onClick={onClick} />
    </span>
  );
}

export default function Media({
  open,
}: {
  open: (content: JSX.Element) => void;
}) {
  const images: Omit<ImgCardProps, "onClick">[] = [
    { src: teste, alt: "teste" },
    { src: teste, alt: "teste" },
    { src: teste, alt: "teste" },
    { src: teste, alt: "teste" },
  ];

  return (
    <section className="media" style={{ maxWidth: "70vw", margin: "auto" }}>
      <h1>Media</h1>
      <div className="grid">
        {images.map((i, key) => (
          <ImgCard
            key={key}
            src={i.src}
            alt={i.alt}
            onClick={() =>
              open(
                <img
                  src={i.src}
                  alt={i.alt}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              )
            }
          />
        ))}
        <ImgCard
          src={teste}
          alt="teste"
          onClick={() => open(<img src={teste} alt="teste" />)}
        />
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    </section>
  );
}
