import avatar1 from "./../../assets/imgs/avatars/avatar-1.webp";
import about1 from "./../../assets/imgs/about-5.webp";
import about2 from "./../../assets/imgs/about-2.webp";

const About = () => {
  return (
    <section id="about" className="scroll-smooth py-20">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] mx-auto p-5 relative">
        <div className="flex flex-wrap justify-center items-center text-center lg:text-justify ">
          <div className="w-full lg:w-1/2 pr-10">
            <span className="text-[#0a69ca] font-semibold">MORE ABOUT US</span>
            <h2 className="font-sans font-bold text-2xl text-[#2d465e] my-3">
              Voluptas enim suscipit temporibus
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex flex-wrap justify-center items-center my-6">
              <div className="w-full lg:w-1/2">
                <ul className="space-y-3">
                  <li>
                    <i className="fa-solid fa-circle-check text-[#0a69ca] mr-2" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check text-[#0a69ca] mr-2" />
                    Consectetur adipiscing elit
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check text-[#0a69ca] mr-2" />
                    Sed do eiusmod tempor
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <ul className="space-y-3">
                  <li>
                    <i className="fa-solid fa-circle-check text-[#0a69ca] mr-2" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check text-[#0a69ca] mr-2" />
                    Consectetur adipiscing elit
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check text-[#0a69ca] mr-2" />
                    Sed do eiusmod tempor
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center py-5">
              <div className="flex items-center justify-start space-x-3 w-full lg:w-1/2">
                <div className="w-1/6">
                  <img
                    src={avatar1}
                    className="w-full rounded-full"
                    alt="Avatar1"
                  />
                </div>
                <div>
                  <h4 className="">Mario Smith</h4>
                  <p className="text-[#0a69ca] text-sm">CEO & Founder</p>
                </div>
              </div>
              <div className="flex items-center justify-start space-x-3 w-full lg:w-1/2 rounded-md shadow-md p-3">
                <i className="fa-solid fa-phone text-[#0a69ca] text-xl " />
                <div>
                  <p className="text-sm opacity-70">Call us anytime</p>
                  <p className="font-semibold">+123 456-789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-5">
            <div className="relative">
              <img src={about1} className="w-full rounded-3xl" alt="" />
              <div className="absolute top-[20%] left-[-10%] w-2/5 border-8 border-white rounded-lg">
                <img src={about2} className="rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
