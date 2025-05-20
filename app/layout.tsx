import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT CAT GALLERY | 고양이 사진 갤러리",
  description:
    "사랑스러운 고양이 사진을 모아보세요. 즐겨찾기 기능으로 마음에 드는 고양이를 저장해둘 수 있어요.",
  keywords: [
    "고양이",
    "캣",
    "고양이 갤러리",
    "고양이 사진",
    "귀여운 동물",
    "cat gallery",
  ],
  openGraph: {
    title: "NEXT CAT GALLERY | 고양이 사진 갤러리",
    description:
      "귀여운 고양이 사진들을 무한 스크롤로 즐기고, 하트로 즐겨찾기까지!",
    url: "https://main.de4cbd1a6bijp.amplifyapp.com/favorites", // 실제 도메인으로 교체하세요
    siteName: "Next Cat Gallery",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class">
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
