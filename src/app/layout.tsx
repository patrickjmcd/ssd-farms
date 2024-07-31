import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import Navbar from "@/templates/Navbar";
import "./globals.css";
import Footer from "@/templates/Footer";

const font = Noto_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "SSD Farms",
    description: "SSD Farms Website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${font.className} min-h-screen bg-sky-100 dark:bg-sky-950 flex flex-col`}>
        <div className="flex-grow-0">
            <Navbar/>
        </div>
        <div className={`flex-grow flex`}>
            {children}
        </div>
        <div className={`flex-grow-0`}>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
