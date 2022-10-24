import { FC } from "react";
import classes from "./index.module.css";

export const Icon: FC<Props> = ({ rounded = true, name, onClick }) => {
  return (
    <div className={classes.wrapper} onClick={onClick}>
      <div className={classes[name]} />
    </div>
  );
};

interface Props {
  rounded?: boolean;
  name: "arrowLeft" | "arrowRight";
  onClick?: () => void;
}
