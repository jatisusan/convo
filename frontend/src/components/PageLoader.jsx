import { MessageCircle } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#141414] to-[#1e1b4b] -z-10" />

      <div className="absolute w-[500px] h-[500px] bg-linear-to-br from-purple-800/25 via-fuchsia-700/20 to-rose-700/20 rounded-full blur-[160px] animate-[spin_35s_linear_infinite] -z-10"></div>

      {/* Loader icon */}
      <MessageCircle className="w-16 h-16 text-purple-500 animate-pulse" />
    </div>
  );
};

export default PageLoader;
