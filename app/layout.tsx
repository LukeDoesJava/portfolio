import type { Metadata } from "next";
import localFont from "next/font/local";
import { Linkedin, Github, Mail } from "lucide-react"; // Import icons
import "./globals.css";

// Import custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Luke Edwards",
  description: "Luke Edwards' personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-grey h-24 py-14 flex flex-col items-center justify-center space-y-3">
          
          <p className="text-gray-500 mb-2">
            © {new Date().getFullYear()} Luke Edwards
          </p>
          <div className="flex gap-4 space-x-24 text-gray-500">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/luke-edwards-670181270/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="hover:text-blue-600" />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/LukeDoesJava"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} className="hover:text-white" />
            </a>

            {/* Email Icon */}
            <a
              href="mailto:luke0edwardss@gmail.com"
              aria-label="Email"
            >
              <Mail size={24} className="hover:text-red-600" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}