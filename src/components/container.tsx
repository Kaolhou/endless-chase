import React from "react";
interface ContainerProps {
  content: React.ReactElement;
  background?: React.ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...any: any[]) => any;
  id?: string;
  center?: boolean;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

export default function Container({
  content,
  background,
  onClick,
  id,
  center = false,
  style,
  contentStyle,
}: ContainerProps) {
  if (background)
    return (
      <div className={"container "} onClick={onClick} id={id} style={style}>
        {background}
        <div
          className={`content ${center ? "center" : ""}`}
          onClick={onClick}
          style={contentStyle}
        >
          {content}
        </div>
      </div>
    );
  return (
    <div
      className={`container ${center ? "center" : ""}`}
      id={id}
      style={style}
    >
      {content}
    </div>
  );
}
