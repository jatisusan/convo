import { useChatStore } from "../store/useChatStore";
import { XIcon } from "lucide-react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  return (
    <div className="flex justify-between items-center bg-[#181030] rounded-lg py-2 px-4">
      <div className="flex items-center gap-3">
        <div className={`avatar avatar-online`}>
          <div className="w-10 rounded-full">
            <img src={selectedUser.profilePic || "/avatar.png"} alt="avatar" />
          </div>
        </div>

        <div>
          <h3 className="font-medium text-light-100">
            {selectedUser.fullName}
          </h3>
          <p className="text-sm text-light-300">Online</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-[#261B4C] p-2 rounded-md w-fit h-fit cursor-pointer hover:bg-[#261B4C]/60"
          onClick={() => setSelectedUser(null)}
        >
          <XIcon className="size-4 text-light-300" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
