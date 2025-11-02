import { useChatStore } from "../store/useChatStore";
import { MessageCircle, Users } from "lucide-react";

const TabSwitch = () => {
  const { activeTab, setActiveTab } = useChatStore();

  const tabs = [
    { id: "chats", label: "Chats", icon: <MessageCircle size={18} /> },
    { id: "contacts", label: "Contacts", icon: <Users size={18} /> },
  ];

  return (
    <div className="tabs flex gap-4 bg-transparent my-3">
      {tabs.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`tab flex-1 px-4 py-2 text-sm font-medium capitalize rounded-lg transition-all duration-300 flex items-center justify-center gap-2
            ${
              activeTab === id
                ? "bg-[#261B4C] text-white backdrop-blur-md"
                : "bg-[#181030] text-slate-300 hover:bg-[#261B4C]/60 hover:text-white"
            }`}
        >
          {/* icon visible on small screens */}
          <span className="block md:hidden">{icon}</span>

          {/* text visible on md and larger */}
          <span className="hidden md:block">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabSwitch;
