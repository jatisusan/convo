import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  const { selectedUser, getMessages, messages, isMessagesLoading } =
    useChatStore();

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser]);

  return (
    <div className="p-3">
      <ChatHeader />
    </div>
  );
};

export default ChatContainer;
