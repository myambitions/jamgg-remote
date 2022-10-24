import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const host = "https://jamgg-server.herokuapp.com/";
const socket = io(host, {
  transports: ["websocket", "polling"],
});

const useWSocket = () => {
  const [state, setState] = useState({
    isConnected: false,
    currentChannel: 0,
  });

  const updateChannel = (nextChannel: number) => {
    socket.emit("updateChannel", nextChannel);
  };

  useEffect(() => {
    socket.on("connected", () => {
      console.log("conn");
      setState({ ...state, isConnected: true });
    });

    socket.on("disconnected", () => {
      setState({ ...state, isConnected: false });
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  return {
    ...state,
    updateChannel,
  };
};

export default useWSocket;
