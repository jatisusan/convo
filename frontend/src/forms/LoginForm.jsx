import { LoaderIcon, LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <h2 className="text-xl font-semibold text-light-100">
            Login to your account
          </h2>
          <p className="text-sm text-slate-400">
            Welcome back, please enter your details.
          </p>
        </div>

        {/* EMAIL INPUT */}
        <div>
          <label className="auth-input-label">Email</label>
          <div className="relative">
            <MailIcon className="auth-input-icon" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="johndoe@gmail.com"
            />
          </div>
        </div>

        {/* PASSWORD INPUT */}
        <div>
          <label className="auth-input-label">Password</label>
          <div className="relative">
            <LockIcon className="auth-input-icon" />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
         <button className="auth-btn" type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? (
            <LoaderIcon className="w-full h-5 animate-spin text-center" />
          ) : (
            "Login"
          )}
        </button>
      </form>

      <p className="text-md text-light-300 mt-4">
        Don't have an account?{" "}
        <a href="/auth/signup" className="text-primary">
          Sign up
        </a>
      </p>
    </>
  );
};

export default LoginForm;
