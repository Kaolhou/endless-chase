interface MutedVideoProps {
  poster?: string;
  src?: string;
  style?: React.CSSProperties;
  className?: string;
  sources?: JSX.Element;
}

export default function MutedVideo({
  src,
  poster,
  style,
  className,
  sources,
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
      {sources ? sources : <source src={src} />}
    </video>
  );
}
