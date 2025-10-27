import { MessageCircle } from "lucide-react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative flex justify-center items-center h-screen w-full">
      {/* Main container */}
      <div className="relative flex flex-col md:flex-row w-full h-full md:w-[90%] lg:w-[85%] lg:max-h-[90vh] bg-[#030018] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Left side — Auth form */}
        <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 text-white">
          <div className="w-full max-w-md">
            <div className="flex items-center justify-center mb-8">
              <MessageCircle className="w-10 h-10" />
              <p className="text-3xl font-bold ml-2">Convo</p>
            </div>
            <Outlet />
          </div>
        </div>

        {/* Right side — Image */}
        <div className="hidden md:flex flex-1 relative overflow-hidden">
          <img
            src="/onboarding.png"
            alt=""
            className="absolute top-0 right-0 h-auto max-h-[80%] w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
