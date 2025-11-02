import ChatList from "../components/ChatList";
import ContactList from "../components/ContactList";
import NoChatSelected from "../components/NoChatSelected";
import ProfileHeader from "../components/ProfileHeader";
import TabSwitch from "../components/TabSwitch";
import { useChatStore } from "../store/useChatStore";
import ChatContainer from "../components/ChatContainer";

const ChatPage = () => {
  const { activeTab, selectedUser } = useChatStore();
  return (
    <div className="relative flex justify-center items-center h-screen w-full">
      {/* Main container */}
      <div className="relative md:p-5 p-3 flex md:gap-6 gap-3 w-full h-full md:w-[90%] lg:w-[85%] lg:max-h-[95vh] bg-[#030018] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Left side */}
        <div className="w-[26%] md:p-4 p-3 bg-[#100D22] backdrop-blur-xl rounded-xl flex flex-col">
          <ProfileHeader />
          <TabSwitch />

          <div className="flex-1 overflow-y-auto space-y-2">
            {activeTab === "chats" ? <ChatList /> : <ContactList />}
          </div>
        </div>

        {/* Right side — Chat messages */}
        <div className="flex-1 flex flex-col bg-[#100D22] rounded-xl backdrop-blur-xl overflow-hidden">
          {selectedUser ? <ChatContainer /> : <NoChatSelected />}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
