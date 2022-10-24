import { CoreIcon as Icon } from "./Icon";
import classes from "./index.module.css";

interface Props {
  onClick: () => void;
}

export const Controls = ({ onClick }: Props) => {
  return (
    <div className={classes.rootControls}>
      <Icon name="arrowLeft" onClick={onClick} />
      <Icon name="arrowRight" onClick={onClick} />
    </div>
  );
};
