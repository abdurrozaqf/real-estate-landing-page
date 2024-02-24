import { Button } from "antd";

interface AuthProps {}

export default function Auth({}: AuthProps) {
  return (
    <div className="w-full hidden lg:flex items-center justify-end gap-x-6">
      <Button
        type="text"
        aria-label="login"
        className="h-auto font-medium tracking-wide"
      >
        <p className="text-lg">Log in</p>
      </Button>
      <Button
        aria-label="create-account"
        className="h-auto py-2 px-8 rounded-2xl bg-black text-white"
      >
        <p className="text-lg font-medium">Create Account</p>
      </Button>
    </div>
  );
}
