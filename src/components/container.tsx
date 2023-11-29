import React from "react";
interface ContainerProps {
  content: React.ReactElement;
  background?: React.ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...any: any[]) => any;
  id?: string;
  center?: boolean;
}

export default function Container({
  content,
  background,
  onClick,
  id,
  center = false,
}: ContainerProps) {
  if (background)
    return (
      <div className={"container "} onClick={onClick} id={id}>
        {background}
        <div className={`content ${center ? "center" : ""}`} onClick={onClick}>
          {content}
        </div>
      </div>
    );
  return (
    <div className={`container ${center ? "center" : ""}`} id={id}>
      {content}
    </div>
  );
}
