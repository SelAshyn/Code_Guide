import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Agdasima, Arima } from 'next/font/google';
import "bootstrap-icons/font/bootstrap-icons.css";



export const metadata: Metadata = {
  title: {
    default: "Code for Future - CodeGuide",
    template: "%s | CodeGuide",
  },
  description: 'By SelAshyn',
}

const agdasima = Agdasima({
  subsets: ['latin'],
  weight: '700',  
});

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
      <link rel="icon" href="/img.png" sizes="any" />
      </head>
      <body>

        <div className="whole">
          <nav className={arima.className}>
            <div className="logo">
              <h1><Link href="/"><Image src="/img.png" width={50} height={100} alt="Logo" /></Link><Link href="" className="log1"><Image src="/img2.png" width={100} height={50} alt="Logo"/></Link></h1>
            </div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="./HTML/index.html">HTML</a></li>
              <li><a href="./Coming/index.html">CSS</a></li> 
              <li><a href="./Coming/index.html">JavaScript</a></li>
              <li><a href="./Coming/index.html">Python</a></li>
              <li><a href="./Coming/index.html">Courses</a></li>
              <li><a href="./Coming/index.html">About Us</a></li>
              <li><a href="./Sign In/index.html" className="sign">Sign In</a></li>
              </ul>
          </nav>
        </div>
        <br />
        
        {children}

        <footer>
            <div className="container1">
               <div className="row">
                            <div className="footer-col">
                              <h4>company</h4>
                              <ul>
                                <li><Link href="#">about us</Link></li>
                                <li><Link href="#">our services</Link></li>
                                <li><Link href="#">privacy policy</Link></li>
                                <li><Link href="#">affiliate program</Link></li>
                              </ul>
                            </div>
                            <div className="footer-col">
                              <h4>get help</h4>
                              <ul>
                                <li><Link href="#">FAQ</Link></li>
                                <li><Link href="#">shipping</Link></li>
                                <li><Link href="#">returns</Link></li>
                                <li><Link href="#">order status</Link></li>
                                <li><Link href="#">payment options</Link></li>
                              </ul>
                            </div>
                            <div className="footer-col">
                              <h4>online shop</h4>
                              <ul>
                                <li><Link href="#">watch</Link></li>
                                <li><Link href="#">bag</Link></li>
                                <li><Link href="#">shoes</Link></li>
                                <li><Link href="#">dress</Link></li>
                              </ul>
                            </div>
                            <div className="footer-col">
                              <h4>follow us</h4>
                              <div className="social-links">
                                <Link href="#"><i className="bi bi-facebook"></i></Link>
                                <Link href="#"><i className="bi bi-twitter"></i></Link>
                                <Link href="#"><i className="bi bi-instagram"></i></Link>
                                <Link href="#"><i className="bi bi-linkedin"></i></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="footer-bottom">
                          <p>copyright &copy; 2023 CodeGuide. designed by <span>Rhishav</span></p>
                      </div>
                    
        </footer>

      </body>
    </html>



  )
};
