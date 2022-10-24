import { useMemo } from "react";
import classes from "./index.module.css";

interface Props {
  currentChannel: number;
}

export const Channel = ({ currentChannel }: Props) => {
  const updatedChannel = useMemo(() => {
    const next = "00" + currentChannel;
    return next.slice(-3);
  }, [currentChannel]);

  return (
    <div className={classes.root}>
      <h3>Now showing:</h3>
      <p>{currentChannel ? updatedChannel : "_ _ _"}</p>
    </div>
  );
};
