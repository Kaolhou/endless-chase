import React, { useState } from "react";
import LinkList from "./link_list";

const CopyToClipboard: React.FC<{
  text: string;
  size?: "f_small" | "f_medium" | "f_large";
  isTop?: boolean;
  isSpan?: boolean;
  isLi?: boolean;
  style?: React.CSSProperties;
}> = ({ text, size = "f_medium", isTop = true, isSpan, isLi, style }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    // Lógica para copiar o texto para a área de transferência
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) =>
        console.error("Erro ao copiar para a área de transferência:", err)
      );
  };

  const resetCopiedState = () => {
    setCopied(false);
  };
  if (isLi)
    return (
      <li
        className="copy-to-clipboard-text-container"
        onClick={handleCopyClick}
        onMouseEnter={resetCopiedState}
        style={style}
      >
        <span className={`tooltip ${isTop ? "top" : "bottom"}`}>
          {copied ? "✅" : "📋"}
        </span>
        <LinkList isSpan={isSpan} content={text} className={size}></LinkList>
      </li>
    );

  return (
    <div
      className="copy-to-clipboard-text-container"
      onClick={handleCopyClick}
      onMouseEnter={resetCopiedState}
      style={style}
    >
      <span className={`tooltip ${isTop ? "top" : "bottom"}`}>
        {copied ? "✅" : "📋"}
      </span>
      <LinkList isSpan={isSpan} content={text} className={size}></LinkList>
    </div>
  );
};

export default CopyToClipboard;
