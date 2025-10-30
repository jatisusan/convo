import { MessageCircleIcon } from "lucide-react";

const MessagesLoadingSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="size-20 bg-primaryColor/10 rounded-full flex items-center justify-center mb-6">
        <MessageCircleIcon className="size-10 text-primaryColor animate-pulse" />
      </div>

      <p className="text-light-300 text-sm">Loading conversation...</p>
    </div>
  );
};

export default MessagesLoadingSkeleton;
