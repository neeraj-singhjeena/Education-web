// components/HeroSection.js

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r bg-red-900 to-white-800 text-black flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-6xl font-400  text-white leading-tight">
            HIGHER HEIGHTS INSTITUTE <br />
            OF ENGLISH LANGUAGE
          </h1>

          <p className="mt-4 text-base md:text-xl text-white ">
            Unlock the power of fluent communication with our English Training
            Institute - where language meets opportunity!
          </p>

          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="tel:+9988763872"
              className="bg-transparent border-2 border-white hover:bg-black hover:text-white-600 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              Call Us
            </a>
            <a
              href="/Courses"
              className="bg-transparent border-2 border-white hover:bg-black hover:text-white-600 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
