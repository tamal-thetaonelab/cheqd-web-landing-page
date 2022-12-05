import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  style?: any;
  className?: string;
}

const VanillaButton = (props: Props) => {
  const { text, onClick, style, className } = props;
  return (
    <span
      style={{
        color: "var(--primary-color)", 
        cursor: "pointer",
        fontWeight: "bold",
        ...style,
      }}
      onClick={onClick}
      className={className}
    >
      {text}
    </span>
  );
};
export default VanillaButton;
