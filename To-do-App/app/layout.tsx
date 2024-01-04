"use client";
import { DataContextProvider } from "@/store/Todo";
import "./globals.css";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import useUser from "@/hooks/useUser";
import { UserProvider } from "@/store/User";

export const metadata = {
  title: "FindPeers",
  description: "The new way to connect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <DataContextProvider> {children}</DataContextProvider>
        </UserProvider>
      </body>
    </html>
  );
}
