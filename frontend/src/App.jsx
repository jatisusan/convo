import { Navigate, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";
import AuthLayout from "./components/AuthLayout";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();
  console.log(authUser);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden  bg-linear-to-br from-[#0A0126] via-[#030018] to-[#0A0126]">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[repeating-radial-gradient(circle,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_2px,transparent_8px)] pointer-events-none" />{" "}
      <Routes>
        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/auth/"
          element={!authUser ? <AuthLayout /> : <Navigate to="/" />}
        >
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            background: "#1E1A6F",
            border: "1px solid rgba(65, 105, 225, 0.2)",
            color: "#ffffff",
          },
        }}
      />
    </div>
  );
}

export default App;
