import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { useState } from "react";

const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <h2 className="text-xl font-semibold text-light-100">
            Create a new account
          </h2>
          <p className="text-sm text-slate-400">
           To use Convo, please enter your details.
          </p>
        </div>
        <div>
          <label className="auth-input-label">Full Name</label>
          <div className="relative">
            <UserIcon className="auth-input-icon" />

            <input
              type="text"
              value={formValues.fullName}
              onChange={(e) =>
                setFormValues({ ...formValues, fullName: e.target.value })
              }
              className="input"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* EMAIL INPUT */}
        <div>
          <label className="auth-input-label">Email</label>
          <div className="relative">
            <MailIcon className="auth-input-icon" />

            <input
              type="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
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
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
              className="input"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button className="auth-btn" type="submit">
          Create Account
        </button>
      </form>

      <p className="text-md text-light-300 mt-4">
        Already have an account?{" "}
        <a href="/auth/login" className="text-primary">
          Sign in
        </a>
      </p>
    </>
  );
};

export default SignupForm;
