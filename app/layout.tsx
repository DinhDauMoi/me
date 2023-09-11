import "./globals.css";
import "./border.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DefaultSidebar } from "@/components/tooltip";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phạm Nguyễn Quang Vinh",
  description: "Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <DefaultSidebar />
        </div>
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
