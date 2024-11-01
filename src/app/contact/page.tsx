import "./style.css";
import { Metadata } from 'next';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Bebas_Neue, Arima, Lora } from 'next/font/google';
import Link from "next/link";

const lora = Lora({
  subsets: ['latin'],
  weight: '400',  
});

const arima = Arima({
  subsets: ['greek'],
  weight: '400',
})



export const metadata: Metadata = {
  title: "Contact Us",
}

export default function Contact(){
  return(
    <>
    <div className="container">
        <br /><br /><br />
          <div className="intro" style={lora.style}>
            <br /><br />
            <i className="bi bi-geo-alt-fill"/>
            <h2>Address</h2>
            <h3>Kathmandu, Nepal <br /> Kapan, Baluwakhani</h3>
            <br /><br />
            <i className="bi bi-telephone-fill"></i>
            <h2>Phone</h2>
            <h3>+977 9864334657 <br /> +977 9851356824</h3>
            <br /><br />
            <i className="bi bi-envelope-fill"></i>
            <h2>Email</h2>
            <h3> ourcompany@gmail.com <br />ourcompany2@gmail.com</h3>
            <br /><br />  
          </div>
          <div className="contact">
          <div className="heading" style={arima.style}>
        <h1>Contact Us</h1>
        <center><hr className="w-40 content-center h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-blue-900" /></center>
        </div>
        <br />
            <form action="./" method="get" style={arima.style}>
              <input type="text" name="" id="" placeholder="First Name"  required />
              <input type="text" name="" id="" placeholder="Last Name" required/>
              <br />
              <input type="email" name="" id="" placeholder="E-mail" required/>
              <input type="number" name="" id="" placeholder="Phone No."  required/>
              <br />
              <textarea name="" id="" placeholder="Enter Message" required/><br /><br />
              <button><Link className="Btn" href="">Submit</Link></button>
            </form>
          </div>
        </div>
    </>
  )
}