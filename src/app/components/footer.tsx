export function Footer() {
  return (
    <footer className="bg-white rounded-[10px] m-6 md:m-12 p-4">
      {/* Main Footer Content */}
      <div
        className="mx-[5px] my-[5px] mt-0 rounded-[20px] p-8 md:p-12 shadow-[0_10px_15px_rgba(0,0,0,0.3)] tracking-[1px]"
        style={{ fontFamily: "Kanit, sans-serif" }}
      >
        <div className="flex flex-wrap justify-center gap-6 md:gap-4 lg:gap-0">
          {/* Company */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-8 lg:mb-0">
            <h4 className="text-[18px] text-black capitalize mb-6 font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:bg-[#e91e63] after:h-[2px] after:w-[50px]">
              Company
            </h4>
            <ul className="list-none">
              {["about us", "our services", "privacy policy", "affiliate program"].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href="#"
                    className="text-[16px] capitalize no-underline font-light text-black block transition-all duration-300 ease-in-out hover:text-red-500 hover:pl-2 hover:tracking-[2px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-8 lg:mb-0">
            <h4 className="text-[18px] text-black capitalize mb-6 font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:bg-[#e91e63] after:h-[2px] after:w-[50px]">
              Courses / Packages
            </h4>
            <ul className="list-none">
              {["HTML / CSS", "Python", "Javascript", "React JS", "Beginners Package"].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href="#"
                    className="text-[16px] capitalize text-black block font-light hover:text-red-500 hover:pl-2 transition-all duration-300 ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-8 lg:mb-0">
            <h4 className="text-[18px] text-black capitalize mb-6 font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:bg-[#e91e63] after:h-[2px] after:w-[50px]">
              Get Help
            </h4>
            <ul className="list-none">
              {["FAQ's", "About Us", "Contact", "Our Team"].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href={item === "Contact" ? "contact" : "#"}
                    className="text-[16px] capitalize text-black block font-light hover:text-red-500 hover:pl-2 transition-all duration-300 ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2">
            <h4 className="text-[18px] text-black capitalize mb-6 font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:bg-[#e91e63] after:h-[2px] after:w-[50px]">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-4 mt-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="inline-block h-10 w-10 text-center leading-[40px] text-[26px] rounded-full text-black transition-all duration-500 ease-in-out hover:text-[#126920]"
                >
                  <i className={`bi bi-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="font-[Arima] text-center py-5 text-black border-t border-gray-200 mt-8">
        <p className="text-[16px] md:text-[18px] tracking-[1px] capitalize leading-relaxed">
          copyright &copy; 2023 <span className="font-semibold">CodeGuide</span>. designed by{" "}
          <span className="uppercase opacity-70 font-extralight text-red-600">Rhishav</span>
        </p>
      </div>
    </footer>
  );
}
