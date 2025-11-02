import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

const ChatContainer = () => {
  const {
    selectedUser,
    getMessages,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeToMessages,
  } = useChatStore();

  const messageEndRef = useRef(null);

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
      subscribeToMessages();

      return () => {
        unsubscribeToMessages();
      };
    }
  }, [selectedUser, getMessages, subscribeToMessages, unsubscribeToMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full p-3">
      <ChatHeader />

      <div className="flex-1 px-6 py-8 overflow-y-auto">
        {messages.length > 0 && !isMessagesLoading ? (
          <div>
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`chat flex flex-col ${
                  msg.senderId === selectedUser._id ? "chat-start" : "chat-end"
                } mb-2`} // add margin bottom for spacing between messages
              >
                <div
                  className={`chat-bubble relative ${
                    msg.senderId === selectedUser._id
                      ? "bg-purple-100"
                      : "bg-primaryColor"
                  }`}
                >
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="chat"
                      className="h-48 object-cover rounded-lg mb-2"
                    />
                  )}
                  {msg.text && <p className="text-[15px] max-sm:text-sm">{msg.text}</p>}
                </div>

                {/* Timestamp */}
                <p
                  className={`text-xs max-sm:text-[10px] text-light-300 mt-1 ${
                    msg.senderId === selectedUser._id
                      ? "self-start"
                      : "self-end"
                  }`}
                >
                  {new Date(msg.createdAt).toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
