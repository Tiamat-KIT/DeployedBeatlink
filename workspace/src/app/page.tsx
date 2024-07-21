'use client';

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { useStoreUserEffect } from "@/hooks/useStoreUserEffect";
import AccountView from "@/components/AccountView";

export default function Home() {

  const { isAuthenticated, isLoading } = useStoreUserEffect()
  const {user} = useUser()
  if (isLoading) return <div>Loading...</div>;

  if(isAuthenticated) {redirect("/list")}

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-y-4 bg-gradient-to-tl from-purple-500 via-cyan-400 to-blue-500">
      <h1 className="text-5xl font-extrabold text-white">
        Hello! BeatLink!
      </h1>
      <div className="flex gap-4">
        {!isAuthenticated ? (
          <SignInButton mode="modal" forceRedirectUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ログイン
            </button>
          </SignInButton>
        ) : (
          <>
          <SignOutButton>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ログアウト
            </button>
          </SignOutButton>
          <AccountView user_id={user!.id}/>
          </>
        )}
      </div>
    </div>
  );
}