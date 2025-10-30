import { MessageCircleIcon } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <MessageCircleIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-light-100 mb-2">
        Select a conversation
      </h3>
      <p className="text-light-300 max-w-md">
        Choose a contact from the sidebar to start chatting or continue a
        previous conversation.
      </p>
    </div>
  );
};

export default NoChatSelected;
