import React from "react";

interface AuthProps {}

export default function Auth({}: AuthProps) {
  return (
    <div className="w-full hidden lg:flex items-center justify-end gap-x-8">
      <button
        type="button"
        aria-label="login"
        className="font font-medium tracking-wide"
      >
        Log in
      </button>
      <button
        type="button"
        aria-label="create account"
        className="bg-black rounded-xl text-white px-6 py-2.5 font-medium tracking-wide"
      >
        Create Account
      </button>
    </div>
  );
}
