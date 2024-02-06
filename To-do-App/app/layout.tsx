import "./globals.css";
import ReduxProviders from "@/utils/ReduxProviders";
import { SessionProvider } from "next-auth/react";
export const metadata = {
  title: "FindPeers",
  description: "The new way to connect",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <ReduxProviders>{children}</ReduxProviders>
        </SessionProvider>
      </body>
    </html>
  );
}
