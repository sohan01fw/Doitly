"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function NextAuthProvider({ children }: Props, session: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
