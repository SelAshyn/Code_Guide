import { Bebas_Neue, Arima } from 'next/font/google';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styleh.css";
import Link from "next/link";
import { Metadata } from "next";

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
        <div className="main">
          <div className="text">
              <h1 style={bebas_neue.style} className='text-6xl text-yellow-300'><Link className='text-emerald-950' href="/">CODEGUIDE</Link> <br /> BEST PATHWAY FOR DEVELOPER'S</h1> <br />
              <h3 className='text-xl' >Welcome to CodeGuide - your guide to the world of coding! Here you'll find a comprehensive set of courses that will teach you everything you need to know about HTML, CSS, Java, and Python. With our expert tutors and unique learning methods, you'll be well on your way to mastering the art of coding.</h3>
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="main2">
          <h1 style={bebas_neue.style} className='text-6xl text-yellow-300 text-center'><Link className='text-purple-600' href="/">WHY WE??</Link></h1> <br />
          <h3 className='text-xl'>CodeGuide, your ultimate companion in the world of coding! Whether you’re a beginner taking your first steps or an experienced coder looking to expand your skillset, CodeGuide offers a structured and engaging path to learning. Our platform features comprehensive courses in HTML, CSS, Java, and Python, designed to help you build a solid foundation and advance to expert levels. <br /> At CodeGuide, we believe learning to code should be accessible, enjoyable, and rewarding. That’s why we combine expert-led instruction, hands-on projects, and interactive exercises to make the process as effective and exciting as possible. Start your journey with CodeGuide and unlock the doors to a world of coding opportunities! </h3>
        </div>
        <br /><br />
        <div className="intro4">
                        <br />
                        <div className="container3">
                                
                                <h1 className="heading" style={bebas_neue.style}>Get Started Now!</h1>
                            
                                <div className="box-container" style={arima.style}>
                            
                                    <div className="box">
                                        
                                        <h3>Sign Up for a Free Trial</h3>
                                        <p>Get access to a range of free courses and learning resources when you sign up for a free trial of CodeGuide.</p>
                                        <br />
                                        <a href="./Coming/index.html" className="btn">Sign Up Free</a>

                                    </div>
                            
                                    <div className="box">
                                        
                                        <h3>Choose a Course</h3>
                                        <p>Choose from our range of courses and learning paths, and start learning coding at your own pace. </p><br/>
                                        <a href="./Coming/index.html" className="btn">View Courses</a>
                                    </div>
                            
                                    <div className="box">
                                        
                                        <h3>Get in Touch</h3>
                                        <p>Learn how to create a mobile app using Java. This course covers everything from user interface design to mobile app testing.</p><br />
                                        <a href="contact/" className="btn">Contact Us</a>
                                    </div>
                            
                            
                                </div>
                            <br />
                            </div>
            </div>
      </center>
    </>
  );
}