import { Metadata } from "next";
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
              <h1><a href="/"><img src="https://raw.githubusercontent.com/SelAshyn/Code_Guide/refs/heads/master/public/img.png" width={50} height={100} alt="Logo" /></a><a href="/" className="log1"><img src="https://raw.githubusercontent.com/SelAshyn/Code_Guide/refs/heads/master/public/img2.png" width={140} height={110} alt="Logo" className="log2"/></a></h1>
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

        <footer>
            <div className="container1" style={kanit.style}>
               <div className="row">
                            <div className="footer-col">
                              <h4>Company</h4>
                              <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                              </ul>
                            </div>
                            <div className="footer-col">
                              <h4>Courses / Packages</h4>
                              <ul>
                                <li><a href="#">HTML / CSS</a></li>
                                <li><a href="#">Python</a></li>
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">React JS</a></li>
                                <li><a href="#">Beginners Package</a></li>
                              </ul>
                            </div>
                            <div className="footer-col">
                              <h4>Get Help</h4>
                              <ul>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="contact">Contact</a></li>
                                <li><a href="#">Our Team</a></li>
                              </ul>
                            </div>
                            <div className="footer-col">
                              <h4>follow us</h4>
                              <div className="social-links">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
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
