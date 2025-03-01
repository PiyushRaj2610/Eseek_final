import React, { useState } from "react";

interface HeadingProps {
  text: string;
}

export const ProfileHeading: React.FC<HeadingProps> = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      onMouseEnter={handleHover}
      className={`w-full flex justify-center items-center text-8xl font-extrabold tracking-widest cursor-pointer text-transparent bg-clip-text bg-gradient-to-r ${
        hovered ? "from-purple-700 to-blue-400" : "from-[#282929] to-[#282929]"
      } transition-colors duration-200`}
    >
      {text}
    </div>
  );
};
