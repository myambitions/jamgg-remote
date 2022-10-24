import classes from "./index.module.css";
import { Channel } from "./Channel";
import { Controls } from "./Controls";

interface Props {
  currentChannel: number;
  onClick: () => void;
}

export const Remote = ({ currentChannel, onClick }: Props) => {
  return (
    <div className={classes.app}>
      <div className={classes.content}>
        <Channel currentChannel={currentChannel} />
        <Controls onClick={onClick} />
      </div>
    </div>
  );
};
