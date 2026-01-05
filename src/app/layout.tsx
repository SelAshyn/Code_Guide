import { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { Arima, Kanit } from 'next/font/google';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";


export const metadata: Metadata = {
  title: {
    default: "Code for Future - CodeGuide",
    template: "%s | CodeGuide",
  },
  description: 'By SelAshyn',
}

const kanit = Kanit({
 subsets: ["latin"],
 weight: '400',
})

const arima = Arima({
  subsets: ['greek'],
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
      <link rel="icon" href="https://raw.githubusercontent.com/SelAshyn/Code_Guide/refs/heads/master/public/img.png" sizes="any" />
      </head>
      <body>

        <Navbar />
        <br />

        {children}
        <Footer />
      </body>
    </html>



  )
};
