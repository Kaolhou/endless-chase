interface MutedVideoProps {
  poster?: string;
  posterMobile?: string;
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
  posterMobile,
}: MutedVideoProps) {
  return (
    <video
      poster={window.innerWidth > 520 ? poster : posterMobile ?? poster}
      muted
      autoPlay
      loop
      playsInline
      style={style}
      className={className}
    >
      {sources ? sources : <source src={src} type="video/mp4" />}
    </video>
  );
}
