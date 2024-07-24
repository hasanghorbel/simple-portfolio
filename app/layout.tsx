import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body suppressHydrationWarning={true} className={cn("antialiased items-center max-w-3xl mt-8 mx-2 text-lg sm:mx-4 md:mx-auto", inter.className)}>
                {" "}
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="flex-auto m-auto min-w-0 flex flex-col px-2 md:px-6">
                        <ModeToggle />
                        <Navbar />
                        {children}
                        
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
