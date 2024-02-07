import NextAuthProvider from "@/utils/NextAuthProvider";
import "./globals.css";
import ReduxProviders from "@/utils/ReduxProviders";
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
        <NextAuthProvider>
          <ReduxProviders>{children}</ReduxProviders>
        </NextAuthProvider>
      </body>
    </html>
  );
}
