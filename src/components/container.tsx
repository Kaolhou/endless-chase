import React from "react";
interface ContainerProps {
  content: React.ReactElement;
  background?: React.ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...any: any[]) => any;
  id?: string;
}

export default function Container({
  content,
  background,
  onClick,
  id,
}: ContainerProps) {
  if (background)
    return (
      <div className="container" onClick={onClick} id={id}>
        {background}
        <section className="content" onClick={onClick}>
          {content}
        </section>
      </div>
    );
  return (
    <div className="container" id={id}>
      {content}
    </div>
  );
}
