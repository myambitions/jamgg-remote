import { Channel } from "components/channel";
import { Controls } from "components/controls";
import classes from "./index.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.content}>
        <Channel />
        <Controls />
      </div>
    </div>
  );
};

export default App;
