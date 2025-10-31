import { MessageCircle } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden  bg-linear-to-br from-[#0A0126] via-[#030018] to-[#0A0126]">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[repeating-radial-gradient(circle,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_2px,transparent_8px)] pointer-events-none" />{" "}
      {/* Loader icon */}
      <div className="relative w-24 h-24 bg-primary/10  rounded-full flex items-center justify-center">
        <MessageCircle className="w-12 h-12 text-primaryColor animate-pulse" />
      </div>
    </div>
  );
};

export default PageLoader;
