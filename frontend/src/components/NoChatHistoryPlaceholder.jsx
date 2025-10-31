import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  const quickMessages = ["👋 Say Hello", "🤝 How are you?", "📅 Meet up soon?"];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="w-16 h-16 bg-primaryColor/10 rounded-full flex items-center justify-center mb-5">
        <MessageCircleIcon className="size-8 text-primaryColor" />
      </div>

      <h3 className="text-lg font-medium text-light-100 mb-3">
        Start your conversation with {name}
      </h3>

      <div className="flex flex-col space-y-3 max-w-md mb-5">
        <p className="text-slate-400 text-sm">
          You have not started a conversation yet . Send a message to start
          chatting!
        </p>
        <div className="h-px w-32 bg-linear-to-r from-transparent via-primary to-transparent mx-auto"></div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {quickMessages.map((msg, index) => (
          <button
            key={index}
            className="px-4 py-2 text-xs font-medium text-light-200 bg-primary/10 rounded-full cursor-text"
          >
            {msg}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
