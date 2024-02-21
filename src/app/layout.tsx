import type {Metadata} from "next";
import "../styles/core.scss";
import {Roboto} from "next/font/google";
import BaseLayout from "@/layout/BaseLayout";

export const metadata: Metadata = {
    title: "Bharat Maliya",
    description: "",
};

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    style: ["normal", "italic"],
    display: "swap",
    preload: true,
    variable: "--font-family"
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Bharat Maliya</title>
            <meta
                name="description"
                content=""
            />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta
                name="author"
                content="Bharat Maliya <maliyabharat10@gmail.com>>"
            />
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
        <main className={roboto.className}>
            <BaseLayout>  {children}</BaseLayout>
        </main>
        <div id={"portal"}/>
        </body>
        </html>
    );
}
