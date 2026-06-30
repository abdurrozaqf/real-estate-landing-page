import { Button } from "@/components/ui/button";

export default function Auth() {
  return (
    <div className="hidden w-full items-center justify-end gap-x-4 lg:flex">
      <Button variant="ghost" size="lg" aria-label="login">
        Log in
      </Button>
      <Button variant="inverse" size="lg" aria-label="create-account">
        Create Account
      </Button>
    </div>
  );
}
