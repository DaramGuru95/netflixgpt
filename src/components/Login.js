import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_small.jpg"
          alt="login-background"
        />
      </div>
      <form className="w-3/12 absolute p-8 bg-[#020506] my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-[#0f0f0f] border border-[#5e5e5e]-300 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-[#0f0f0f] border border-[#5e5e5e]-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-[#0f0f0f] border border-[#5e5e5e]-300 rounded-md"
        />
        <button className="p-4 my-6 bg-red-700 rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? `New to Netflix? Sign up now.`
            : "Already Registered Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
