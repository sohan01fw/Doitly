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
        <ReduxProviders>{children}</ReduxProviders>
      </body>
    </html>
  );
}
