import { useChatStore } from "../store/useChatStore";

const TabSwitch = () => {
  const { activeTab, setActiveTab } = useChatStore();
  return (
    <div className="tabs gap-4 bg-transparent my-3">
      {["chats", "contacts"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab flex-1 px-4 py-2 text-sm font-medium capitalize text-light-100 rounded-lg transition-all duration-300
            ${
              activeTab === tab
                ? "bg-[#261B4C] text-white backdrop-blur-md"
                : "bg-[#181030] text-slate-300 hover:bg-[#261B4C]/60 hover:text-white"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitch;
