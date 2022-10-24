import { useContext, useMemo } from "react";
import { AppContext } from "store/context";
import classes from "./index.module.css";

export const Channel = () => {
  const { currentChannel } = useContext(AppContext);

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
