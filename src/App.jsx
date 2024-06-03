import React , {useState} from 'react';
import carousal from '../src/assets/carousal.png'

const LimitedStockBanner = () => (
  <div className="container-2xl">
    <div className="bg-[#ffc200] p-[5px] text-center">
      Limited Stock Left !!
    </div>
    <div className="bg-[#222222] h-[42px] flex text-white justify-center items-center">
      <div className="m-10 text-xs">
        Call: <span className="underline tracking-widest ml-1">03006487750</span>
      </div>
    </div>
  </div>
);




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <div className="flex items-center space-x-4 flex-1">
          <div className="hidden xl:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">MENU</a>
            <a href="#" className="text-gray-600 hover:text-black">CUSTOMER REVIEWS</a>
            <a href="#" className="text-gray-600 hover:text-black">ABOUT US</a>
            <a href="#" className="text-red-600 hover:text-red-800 relative">
              EID
              <span className="absolute top-0  bg-red-500 text-white text-xs font-bold px-1 rounded">SALE</span>
            </a>
          </div>
          <div className="xl:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 text-center">
          <a href="#" className="text-2xl font-bold tracking-tight">Little Luxuries<span className="text-green-600"></span></a>
        </div>
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <a href="#" className="text-gray-600 hover:text-black"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3-3m0 0l3 3m-3-3v12m4-4l-3 3m0 0l-3-3m3 3V3" /></svg></a>
          <a href="#" className="text-gray-600 hover:text-black"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 16.017a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm-8 0v-4m0 0v-4a4 4 0 1 1 8 0v4m-8 0H8a4 4 0 1 0 8 0h-2m-8 0h12M5 16a4 4 0 1 1 8 0H5zm0-8a4 4 0 0 1 8 0H5z" /></svg></a>
          <a href="#" className="text-gray-600 hover:text-black relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.38 9.2a4 4 0 1 1-7.24 0L8 8m0 0H3m5 0h6a4 4 0 1 0 0-4H8v4z" /></svg>
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-1 rounded-full">0</span>
          </a>
        </div>
      </div>
      <div className={`xl:hidden ${isMenuOpen ? 'block' : 'hidden'} px-4 pb-2`}>
        <a href="#" className="block text-gray-600 hover:text-black py-1">MENU</a>
        <a href="#" className="block text-gray-600 hover:text-black py-1">CUSTOMER REVIEWS</a>
        <a href="#" className="block text-gray-600 hover:text-black py-1">ABOUT US</a>
        <a href="#" className="block text-red-600 hover:text-red-800 relative py-1">
          EID SALE
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-1 rounded">SALE</span>
        </a>
      </div>
    </nav>
  );
};


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    carousal
   
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full  mx-auto">
      <div className="carousel flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item min-w-full transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </div>
      {/* <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Prev
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Next
      </button> */}
    </div>
  );
};


const PromoBanner = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center bg-yellow-500 text-black p-8">
        <img src="https://c1.wallpaperflare.com/preview/898/675/725/handbags-fashion-editorial-woman.jpg" alt="All Bags" className="w-full h-auto" />
        <h2 className="text-2xl font-bold mt-4">ALL BAGS</h2>
        <p className="text-xl">SHOP NOW</p>
        <p className="text-4xl font-bold mt-2">UP TO <span className="text-white">70%</span> OFF</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-yellow-500 text-black p-8">
        <img src="https://c4.wallpaperflare.com/wallpaper/373/892/903/accessories-adult-attractive-bag-wallpaper-preview.jpg" alt="Women Clothing" className="w-full h-auto" />
        <h2 className="text-2xl font-bold mt-4">WOMEN CLOTHING</h2>
        <p className="text-xl">SHOP NOW</p>
        <p className="text-4xl font-bold mt-2">UP TO <span className="text-red-600">70%</span> OFF</p>
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="bg-white text-center py-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-4">Little Luxuries</h2>
      <p className="mb-4 text-sm md:text-base">
        Subscribe to our newsletter and use code "WELCOME" to get free shipping
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="email"
          placeholder="Your email address"
          className="border border-gray-400 px-4 py-2 w-full md:w-auto"
        />
        <button className="bg-maroon-500 text-white px-4 py-2 w-full md:w-auto">
          SUBSCRIBE
        </button>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="text-black">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-black">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-black">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mb-4">
        <a href="#" className="text-gray-600">CUSTOMER REVIEWS</a>
        <a href="#" className="text-gray-600">CONTACT US</a>
        <a href="#" className="text-gray-600">RETURN & REFUND POLICY</a>
        <a href="#" className="text-gray-600">ABOUT US</a>
        <a href="#" className="text-gray-600">SHIPPING POLICY</a>
        <a href="#" className="text-gray-600">BLOGS</a>
      </div>
      <p className="text-gray-500">&copy; LittleLuxuries.pk 2024</p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
        <a href="#" className="text-gray-500">Contact Us</a>
        <a href="#" className="text-gray-500">Privacy Policy</a>
        <a href="#" className="text-gray-500">Return & Refund Policy</a>
      </div>
    </footer>
  );
};








const App = () => (
  <div>
    <LimitedStockBanner />
    <Navbar/>
    <Carousel/>
    <PromoBanner/>
    <Footer/>
   
  </div>
);

export default App;
