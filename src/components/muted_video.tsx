interface MutedVideoProps {
  poster?: string;
  src: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function MutedVideo({
  src,
  poster,
  style,
  className,
}: MutedVideoProps) {
  return (
    <video
      poster={poster}
      muted
      autoPlay
      loop
      style={style}
      className={className}
    >
      <source src={src} />
    </video>
  );
}
