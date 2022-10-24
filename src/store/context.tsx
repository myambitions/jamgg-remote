import {
  useCallback,
  useState,
  createContext,
  useEffect,
  FC,
  ReactNode,
} from "react";
import { onValue, ref } from "firebase/database";
import { db } from "api/firebase";
import useWSocket from "api";

const initialContext = {
  currentChannel: 0,
  updateChannel: () => {},
};

export const AppContext = createContext<ContextProps>(initialContext);

const AppProvider: FC<Props> = ({ children }) => {
  const [currentChannel, setCurrentChannel] = useState(
    initialContext.currentChannel
  );

  const socket = useWSocket();

  const updateChannel = useCallback(
    async (nextChannel: number) => {
      if (nextChannel > 0) {
        socket.updateChannel(nextChannel);
        setCurrentChannel(nextChannel);
      }
    },
    [socket]
  );

  const defaultContext = {
    currentChannel,
    updateChannel,
  };

  useEffect(() => {
    const query = ref(db, "currentChannel");
    return onValue(query, function (snapshot) {
      const data: number = snapshot.val();
      setCurrentChannel(data);
    });
  }, []);

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

interface Props {
  children: ReactNode;
}

interface ContextProps {
  currentChannel: number;
  updateChannel: (nextChannel: number) => void;
}
