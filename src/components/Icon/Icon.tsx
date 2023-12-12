import { FC, ReactNode } from "react";
import "./style.css";

interface Props {
  size?: "large" | "inherit" | "medium" | "small";
  className?: string;
  icon: ReactNode;
}

export const Icon: FC<Props> = ({ className, icon }: Props) => {
  return <div className={`icon ${className}`}>{icon}</div>;
};
