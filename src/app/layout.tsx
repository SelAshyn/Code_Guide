import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Arima, Kanit } from 'next/font/google';
import "bootstrap-icons/font/bootstrap-icons.css";



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

        <div className="whole">
          <nav className={arima.className}>
            <div className="logo">
              <h1><Link href="/"><img src="https://raw.githubusercontent.com/SelAshyn/Code_Guide/refs/heads/master/public/img.png" width={50} height={100} alt="Logo" /></Link><Link href="" className="log1"><img src="https://raw.githubusercontent.com/SelAshyn/Code_Guide/refs/heads/master/public/img2.png" width={100} height={50} alt="Logo"/></Link></h1>
            </div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="./Coming/index.html">Courses</a></li>
              <li><a href="./Coming/index.html">About Us</a></li>
              
              </ul>
              <a href="./Sign In/index.html" className="sign">Sign In</a>
          </nav>
        </div>
        <br />
        
        {children}

        <center>
        <footer>
            <div className="container1" style={kanit.style}>
               <div className="row">
                            <div className="footer-col">
                              <h4>Company</h4>
                              <ul>
                                <li><Link href="#">about us</Link></li>
                                <li><Link href="#">our services</Link></li>
                                <li><Link href="#">privacy policy</Link></li>
                                <li><Link href="#">affiliate program</Link></li>
                              </ul>
                            </div>
                            <div className="footer-col">
                              <h4>Courses / Packages</h4>
                              <ul>
                                <li><Link href="#">HTML / CSS</Link></li>
                                <li><Link href="#">Python</Link></li>
                                <li><Link href="#">Javascript</Link></li>
                                <li><Link href="#">React JS</Link></li>
                                <li><Link href="#">Beginners Package</Link></li>
                              </ul>
                            </div>
                            <div className="footer-col">
                              <h4>Get Help</h4>
                              <ul>
                                <li><Link href="#">FAQ's</Link></li>
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Contact</Link></li>
                                <li><Link href="#">Our Team</Link></li>
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
        </center>
      </body>
    </html>



  )
};
