import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

export default function ClerkHeader() {
  return (
    <>
      <header className="flex gap-6">
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  );
}
