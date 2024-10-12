// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
       
        <div className="flex items-center space-x-4">
          {/* <img
            src="/logo.png" // Your logo path
            alt="Higher Heights Logo"
            className="w-12 h-12"
          /> */}
          <h1 className="text-lg text-black font-semibold">HIGHER HEIGHTS</h1>
        </div>

        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center md:text-left">
       
        <div>
          <h2 className="text-lg font-bold text-black  ">Courses</h2>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li>IELTS</li>
            <li>Spoken English</li>
            <li>PTE</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-bold text-black ">Pages</h2>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-bold text-black ">Contact Details</h2>
          <p className="text-gray-600 mt-2">
            Address: Jct Thaper colony chohal, Distt. Hoshiarpur, Punjab, Pin -
            144527
          </p>
          <p className="text-gray-600">Phone: +91 9988763872</p>
          <p className="text-gray-600">Email: institute.hhie@gmail.com</p>
        </div>
      </div>

      
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600">
          <p>Copyright © 2024 Higher Heights</p>
          <p>
            Powered by{" "}
            <a href="#" className="font-semibold text-red-600">
              KN Tech Works
            </a>
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="https://wa.me/9988763872"
            target="_blank"
            // rel="noopener noreferrer"
          >
            <img
              src="/OIP (23).jpeg" // WhatsApp icon path
              alt="WhatsApp"
              className="w-10 h-10"
            />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
