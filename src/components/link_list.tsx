interface LinkListProps {
  url?: string;
  content: string;
  bold?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  isSpan?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default function LinkList({
  content,
  url,
  bold,
  className,
  style,
  isSpan,
  onClick,
  target,
}: LinkListProps) {
  if (url && !isSpan)
    return (
      <li
        className={`link_list ${bold ? "bold" : ""}  ${className ?? ""} `}
        style={{ ...style }}
        onClick={onClick}
      >
        <a href={url} target={target}>
          {content}
        </a>
      </li>
    );
  if (isSpan)
    return (
      <span
        className={`link_list ${bold ? "bold" : ""} ${className}`}
        style={{ cursor: "pointer", display: "block", ...style }}
        onClick={onClick}
      >
        {content}
      </span>
    );

  return (
    <li
      className={`link_list ${bold ? "bold" : ""} ${className}`}
      style={{ cursor: "default", ...style }}
      onClick={onClick}
    >
      {content}
    </li>
  );
}
