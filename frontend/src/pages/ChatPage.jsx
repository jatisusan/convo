import ChatList from "../components/ChatList";
import ChatMessages from "../components/ChatMessages";
import ContactList from "../components/ContactList";
import NoChatSelected from "../components/NoChatSelected";
import ProfileHeader from "../components/ProfileHeader";
import TabSwitch from "../components/TabSwitch";
import { useChatStore } from "../store/useChatStore";

const ChatPage = () => {
  const { activeTab, selectedUser } = useChatStore();
  return (
    <div className="relative flex justify-center items-center h-screen w-full">
      {/* Main container */}
      <div className="relative p-5 flex gap-6 w-full h-full md:w-[90%] lg:w-[85%] lg:max-h-[95vh] bg-[#030018] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Left side */}
        <div className="w-[26%] p-4 bg-[#100D22] backdrop-blur-xl rounded-xl">
          <ProfileHeader />
          <TabSwitch />

          <div className="flex-1 overflow-y-auto space-y-2">
            {activeTab === "chats" ? <ChatList /> : <ContactList />}
          </div>
        </div>

        {/* Right side — Chat messages */}
        <div className="flex-1 flex-col bg-[#100D22] rounded-xl backdrop-blur-xl">
          {selectedUser ? <ChatMessages /> : <NoChatSelected />}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
