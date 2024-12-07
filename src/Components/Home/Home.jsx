// import React from "react";
import hero from './../../assets/imgs/illustration-1.webp'

const Home = () => {
  return (
    <section id='home' className="w-full h-screen flex items-center justify-center relative py-10">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
            color-mix(in srgb, var(--accent-color), transparent 95%) 60%, 
            color-mix(in srgb, var(--accent-color), transparent 90%) 55%, 
            transparent 50%)
          `,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#3195fd] bg-opacity-10"></div>
      </div>

      {/* المحتوى */}
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] mx-auto p-5 relative top-[40%] sm:top-[45%] md:top-[60%] lg:top-20 ">
        <div className="flex flex-wrap justify-center text-center lg:text-justify items-center">
          <div className="w-full lg:w-1/2 pr-5">
            <div className="text-[#3195fd] bg-[#e1efff] inline p-3 rounded-full font-medium mb-1">
              <i className="fa-solid fa-gear mr-2" />
              Working for your success
            </div>
            <h1 className="my-5 font-bold text-5xl font-sans leading-snug tracking-wider">
              Maecenas Vitae
              <br />
              Consectetur Led
              <br />
              <span className="text-[#3195fd]">Vestibulum Ante</span>
            </h1>
            <p>
              Nullam quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
              sodales sagittis magna.
            </p>
            <div className="space-x-5 mt-8 font-medium">
              <a href="#">
                <button className="text-white bg-[#3195fd] py-3 px-6 rounded-full">
                  Get Started
                </button>
              </a>
              <a href="#">
                <button className="opacity-80 duration-300 hover:text-[#0a69ca] hover:duration-300">
                <i className="fa-regular fa-circle-play mr-2" />
                  Play Video</button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={hero} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
