import "../styles/glitch_button.css";

interface GlitchedButtonProps {
  title: string;
  alternative: string;
}
export default function GlitchedButton({
  title,
  alternative,
}: GlitchedButtonProps) {
  return (
    <button className="button" role="button" data-alternate={alternative}>
      {title}
    </button>
  );
}
