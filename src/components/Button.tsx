import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  bg?: string;
  hoverTextColor?: string;
  alignItem?: string;
  flex?: string;
  flexCol?: string;
}

function Button({
  children,
  onClick,
  bg,
  hoverTextColor,
  alignItem,
  flex,
  flexCol,
}: IButtonProps) {
  return (
    <div className={`w-full ${flex} ${flexCol}`}>
      <button
        className={`w-[200px] ${alignItem} p-3 rounded-3xl ${bg} font-semibold text-base text-white ${hoverTextColor}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
