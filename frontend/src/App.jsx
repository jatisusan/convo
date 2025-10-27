import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="relative min-h-screen flex justify-center items-center p-4 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#141414] to-[#1e1b4b]" />
      <div className="absolute w-[450px] h-[450px] bg-linear-to-br from-purple-800/15 via-fuchsia-700/10 to-rose-700/10 rounded-full blur-[140px] animate-[spin_35s_linear_infinite]" />

      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
