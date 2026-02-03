"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <Link href="/" className="text-base font-semibold">
        One Creation
      </Link>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <SignedOut>
          <SignInButton mode="modal">
            <Button size="sm">登录</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{ elements: { userButtonAvatarBox: "h-8 w-8" } }}
          />
        </SignedIn>
      </div>
    </header>
  );
}
