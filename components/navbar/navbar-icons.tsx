"use client";

import { FaRegBuilding, FaServicestack } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import { SiPaloaltosoftware } from "react-icons/si";
import { IoIosPricetags } from "react-icons/io";

/** Material Icons keyboard_arrow_down (rounded chevron) - same as original */
export function KeyboardArrowDown({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ width: "1.2rem", height: "1.2rem", verticalAlign: "middle", ...style }}
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  );
}

/** Icons for main nav items (same as original routes) */
export const navItemIcons = {
  Software: <SiPaloaltosoftware style={{ fontSize: "1.1rem" }} />,
  Services: <FaServicestack style={{ fontSize: "1.1rem" }} />,
  Plans: <IoIosPricetags style={{ fontSize: "1.1rem" }} />,
  Insights: <MdInsights style={{ fontSize: "1.1rem" }} />,
  Company: <FaRegBuilding style={{ fontSize: "1.1rem" }} />,
} as const;
