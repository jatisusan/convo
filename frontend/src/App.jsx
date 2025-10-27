import { Navigate, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";

function App() {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;
  
  return (
    <div className="relative min-h-screen flex justify-center items-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#141414] to-[#1e1b4b] -z-10" />
      <div className="absolute w-[450px] h-[450px] bg-linear-to-br from-purple-800/15 via-fuchsia-700/10 to-rose-700/10 rounded-full blur-[140px] animate-[spin_35s_linear_infinite] -z-10" />

      <Routes>
        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignupPage /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
