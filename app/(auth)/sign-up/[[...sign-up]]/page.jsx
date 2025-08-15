import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}
// created optional [[...sign-up]] page for Clerk authentication
// This page will be used for signing up users using Clerk's authentication system.
// It allows users to create an account and manage their authentication flow.