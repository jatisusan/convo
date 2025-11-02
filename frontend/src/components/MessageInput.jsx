import { useRef, useState } from "react";
import useKeyboardSound from "../hooks/useKeyboardSound";
import { ImageIcon, Send, XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";

const MessageInput = () => {
  const { playRandomKeyStroke } = useKeyboardSound();

  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const { sendMessage, isSoundEnabled } = useChatStore();

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!text.trim() && !imagePreview) return;

    if (isSoundEnabled) playRandomKeyStroke();

    sendMessage({ text: text.trim(), image: imagePreview });

    setText("");
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/"))
      return toast.error("Please select an image.");
    if (file.size > 2 * 1024 * 1024)
      return toast.error("File size must be < 2MB.");

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  return (
    <div className="bg-[#181030] rounded-lg py-2 px-4">
      {imagePreview && (
        <div className="max-w-3xl mx-auto mb-3 flex items-center">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-slate-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#261B4C]/90 flex items-center justify-center text-slate-200 hover:bg-[#261B4C] cursor-pointer transition-colors duration-200"
              type="button"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex flex-wrap items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={() => {
            if (isSoundEnabled) playRandomKeyStroke();
          }}
          placeholder="Type a message..."
          className="flex-1 text-light-100 min-w-[150px] text-[15px] placeholder-light-300 focus:outline-none"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
        />

        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="bg-[#261B4C] p-2 max-sm:p-1.5 rounded-md w-fit cursor-pointer hover:bg-[#261B4C]/60"
          >
            <ImageIcon className="size-5 max-sm:size-4.5" />
          </button>

          <button
            type="submit"
            disabled={!text.trim() && !imagePreview}
            className="bg-primaryColor/80 p-2 max-sm:p-1.5 rounded-md w-fit cursor-pointer enabled:hover:bg-primaryColor/60 disabled:opacity-50 disabled:cursor-not-allowed "
          >
            <Send className="size-5 max-sm:size-4.5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
