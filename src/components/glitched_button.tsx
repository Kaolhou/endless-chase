import "../styles/glitch_button.css";

interface GlitchedButtonProps {
  title: string;
  alternative: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
  url?: string;
}
export default function GlitchedButton({
  title,
  alternative,
  onClick,
  url,
  target,
}: GlitchedButtonProps) {
  if (url)
    return (
      <a href={url} target={target}>
        <button
          className="button"
          role="button"
          data-alternate={alternative}
          onClick={onClick}
          style={{ cursor: "pointer" }}
        >
          {title}
        </button>
      </a>
    );
  return (
    <button
      className="button"
      role="button"
      data-alternate={alternative}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined }}
    >
      {title}
    </button>
  );
}
