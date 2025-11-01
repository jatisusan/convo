import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import NoChatsFound from "./NoChatsFound";
import UsersSkeleton from "./UsersSkeleton";
import { useAuthStore } from "../store/useAuthStore";

const ChatList = () => {
  const { chats, isUsersLoading, getChats, setSelectedUser } = useChatStore();
  const {onlineUsers} = useAuthStore();

  useEffect(() => {
    getChats();
  }, [getChats]);

  if (isUsersLoading) return <UsersSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;
  return (
    <>
      {chats.map((chat) => (
        <div
          key={chat._id}
          className="hover:bg-[#160f2c] bg-[#160f2c]/50 p-4 rounded-lg cursor-pointer"
          onClick={() => setSelectedUser(chat)}
        >
          <div className="flex items-center gap-3">
            <div className={`avatar ${onlineUsers.includes(chat._id) && "avatar-online"}`}>
              <div className="size-12 rounded-full">
                <img src={chat.profilePic || "/avatar.png"} alt="avatar" />
              </div>
            </div>

            <h4 className="font-medium truncate text-light-100">
              {chat.fullName}
            </h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatList;
