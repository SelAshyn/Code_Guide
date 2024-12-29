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

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',  
});



export const metadata: Metadata = {
  title: "Contact Us",
}

export default function Contact(){
  return(
    <>
    <center>
      <div className="container">
  <div className="content">
    <div className="left-side">
      <div className="address details">
        <i className="bi bi-geo-alt-fill" />
        <div className="topic">Address</div>
        <div className="text-one">Surkhet, NP12</div>
        <div className="text-two">Birendranagar 06</div>
      </div>
      <div className="phone details">
        <i className="bi bi-telephone-fill" />
        <div className="topic">Phone</div>
        <div className="text-one">+0098 9893 5647</div>
        <div className="text-two">+0096 3434 5678</div>
      </div>
      <div className="email details">
        <i className="bi bi-envelope-fill" />
        <div className="topic">Email</div>
        <div className="text-one">codinglab@gmail.com</div>
        <div className="text-two">info.codinglab@gmail.com</div>
      </div>
    </div>
    <div className="right-side">
      <div className="topic-text"><h1 style={bebas_neue.style}>Send us a message</h1></div>
      <p>
        If you have any work from me or any types of quries related to my
        tutorial, you can send me message from here. It's my pleasure to help
        you.
      </p>
      <br />
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-box message-box">
          <textarea placeholder="Enter your message" />
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
  </div>
</div>
</center>

    </>
  )
}