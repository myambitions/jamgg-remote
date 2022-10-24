import { useContext } from "react";
import { AppContext } from "store/context";
import { Icon } from "components/icon";
import classes from "./index.module.css";

export const Controls = () => {
  const { updateChannel, currentChannel } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <Icon
        name="arrowLeft"
        onClick={() => updateChannel(currentChannel - 1)}
      />
      <Icon
        name="arrowRight"
        onClick={() => updateChannel(currentChannel + 1)}
      />
    </div>
  );
};
