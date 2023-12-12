import { FC } from "react";
import "./styles.css";

interface Props {
  className?: string;
}

export const ArrowIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color: "inherit !important" }}
    >
      <g>
        <path
          id="Vector"
          d="M10.47 8L6.46997 4L5.52997 4.94L8.5833 8L5.52997 11.06L6.46997 12L10.47 8Z"
          fillOpacity="0.6"
        />
      </g>
    </svg>
  );
};
