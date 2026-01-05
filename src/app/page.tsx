import { Bebas_Neue, Arima } from 'next/font/google';
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { Metadata } from "next";
import { Hero } from './components/hero';
import LoginPage from './components/login';

export const metadata: Metadata = {
  title: "Home | CodeGuide",
}

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

const arima = Arima({
  subsets: ['greek'],
  weight: '400',
})



export default function Home(){
  return (
    <>
      <center>
        <Hero />
        <LoginPage />
      </center>
    </>
  );
}
