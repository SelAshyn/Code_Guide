import { Bebas_Neue, Arima } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | CodeGuide",
};

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const arima = Arima({
  subsets: ["greek"],
  weight: "400",
});

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 text-center">
      {/* Section 1 - Hero */}
      <div className="w-full max-w-6xl mt-5">
        <div className="shadow-2xl w-full rounded-[10px] bg-[rgb(67,212,140)] leading-6 p-6 sm:p-8 md:p-10 text-center">
          <h1
            style={bebas_neue.style}
            className="text-4xl sm:text-5xl md:text-6xl text-yellow-300 drop-shadow-[0_5px_15px_rgb(9,42,231)]"
          >
            <Link className="text-emerald-950" href="/">
              CODEGUIDE
            </Link>
            <br />
            BEST PATHWAY FOR DEVELOPER&apos;S
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-black">
            Welcome to CodeGuide — your guide to the world of coding! Here
            you'll find a comprehensive set of courses to teach you HTML, CSS,
            Java, and Python. With expert tutors and hands-on methods, you’ll be
            well on your way to mastering the art of coding.
          </p>
        </div>
      </div>

      {/* Section 2 - Why We */}
      <div className="w-full max-w-6xl mt-20">
        <div className="shadow-2xl w-full rounded-[10px] p-6 sm:p-8 md:p-10 bg-[rgb(127,197,255)] text-justify">
          <h1
            style={bebas_neue.style}
            className="text-4xl sm:text-5xl md:text-6xl text-yellow-300 text-center drop-shadow-[0_5px_10px_rgb(43,255,0)]"
          >
            <Link className="text-purple-600" href="/">
              WHY WE??
            </Link>
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-black">
            CodeGuide is your ultimate companion in the world of coding! Whether
            you’re a beginner taking your first steps or an experienced coder
            expanding your skillset, we offer structured, engaging learning paths.
            Our platform features comprehensive courses in HTML, CSS, Java, and
            Python to help you grow from beginner to expert. <br />
            <br />
            We believe learning to code should be accessible, enjoyable, and
            rewarding. That’s why we combine expert-led lessons, hands-on projects,
            and interactive exercises to make your learning journey exciting and
            effective. Start your journey with CodeGuide today!
          </p>
        </div>
      </div>

      {/* Section 3 - Get Started */}
      <div className="w-full max-w-7xl mt-12 mb-16">
        <h1
          style={bebas_neue.style}
          className="text-center mt-20 text-4xl sm:text-5xl md:text-[50px] text-black tracking-[1px] drop-shadow-[0_5px_15px_rgb(231,9,9)] mb-10"
        >
          Get Started Now!
        </h1>

        {/* Box Container */}
        <div
          style={arima.style}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-2 sm:px-0"
        >
          {/* Box 1 */}
          <div className="shadow-2xl rounded-[5px] text-center p-6 sm:p-8 bg-[rgb(132,231,86)/40 backdrop-blur-xl text-black transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] hover:outline hover:outline-[2px] hover:outline-[rgb(0,247,255)] hover:bg-[#94df8b]">
            <h3 className="text-[22px] sm:text-[24px] py-[10px] font-semibold">
              Sign Up for a Free Trial
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed">
              Get access to a range of free courses and learning resources when
              you sign up for a free trial of CodeGuide.
            </p>
            <a
              href="./Coming/index.html"
              className="inline-block mt-4 text-[14px] text-black bg-[rgb(51,255,0)] rounded-[5px] py-[8px] px-[25px] hover:tracking-[1px]"
            >
              Sign Up Free
            </a>
          </div>

          {/* Box 2 */}
          <div className="shadow-2xl rounded-[5px] text-center p-6 sm:p-8 bg-[rgb(132,231,86)/40 backdrop-blur-xl text-black transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] hover:outline hover:outline-[2px] hover:outline-[rgb(0,247,255)] hover:bg-[#94df8b]">
            <h3 className="text-[22px] sm:text-[24px] py-[10px] font-semibold">
              Choose a Course
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed">
              Choose from our wide range of courses and learning paths, and start
              learning at your own pace.
            </p>
            <a
              href="./Coming/index.html"
              className="inline-block mt-4 text-[14px] text-black bg-[rgb(51,255,0)] rounded-[5px] py-[8px] px-[25px] hover:tracking-[1px]"
            >
              View Courses
            </a>
          </div>

          {/* Box 3 */}
          <div className="shadow-2xl rounded-[5px] text-center p-6 sm:p-8 bg-[rgb(132,231,86)/40 backdrop-blur-xl text-black transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] hover:outline hover:outline-[2px] hover:outline-[rgb(0,247,255)] hover:bg-[#94df8b]">
            <h3 className="text-[22px] sm:text-[24px] py-[10px] font-semibold">
              Get in Touch
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed">
              Learn how to create a mobile app using Java. This course covers
              everything from UI design to app testing.
            </p>
            <a
              href="contact"
              className="inline-block mt-4 text-[14px] text-black bg-[rgb(51,255,0)] rounded-[5px] py-[8px] px-[25px] hover:tracking-[1px]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
