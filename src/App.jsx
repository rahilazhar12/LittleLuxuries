import React , {useState} from 'react';
import { FiUser } from "react-icons/fi";




const LimitedStockBanner = () => (
  <div className="container-2xl">
    <div className="bg-pink-200 p-[5px] text-center">
      Limited Stock Left !!
    </div>
    <div className="bg-[#222222] h-[42px] flex text-white justify-center items-center">
      <div className="m-10 text-xs">
        Call: <span className="underline tracking-widest ml-1">0300-0000000</span>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
   <nav className="bg-white shadow-md sticky top-0 transition duration-500 ease-in-out transform z-50">
  <div className="container mx-auto px-4 flex justify-between items-center py-2">
    <div className="flex items-center space-x-4 flex-1">
      <div className="hidden xl:flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-black">MENU</a>
        <a href="#" className="text-gray-600 hover:text-black">CUSTOMER REVIEWS</a>
        <a href="#" className="text-gray-600 hover:text-black">ABOUT US</a>
        <a href="#" className="text-red-600 hover:text-red-800 relative">
          EID
          <span className="absolute top-0 bg-red-500 text-white text-xs font-bold px-1 rounded">SALE</span>
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
      <a href="#" className="text-2xl font-bold tracking-tight">AN - Luxuries<span className="text-green-600"></span></a>
    </div>
    <div className="flex items-center space-x-4 flex-1 justify-end">
      <a href="#" className="text-gray-600 hover:text-black">
         <FiUser className=''/>
      </a>
      <a href="#" className="text-gray-600 hover:text-black">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 16.017a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm-8 0v-4m0 0v-4a4 4 0 1 1 8 0v4m-8 0H8a4 4 0 1 0 8 0h-2m-8 0h12M5 16a4 4 0 1 1 8 0H5zm0-8a4 4 0 0 1 8 0H5z" />
        </svg>
      </a>
      <a href="#" className="text-gray-600 hover:text-black relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.38 9.2a4 4 0 1 1-7.24 0L8 8m0 0H3m5 0h6a4 4 0 1 0 0-4H8v4z" />
        </svg>
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

    </>
  );
};

const Banner = () => {
  return (
    <section className="relative container mx-auto md:px-32 mb-10">
      <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/New-Arrival-Bags-Fineur-Hero-banner_1.png?v=1706206927" alt="New Arrivals" className="w-full h-auto object-cover"/>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12">
        {/* <h1 className="text-4xl md:text-6xl font-bold text-black">NEW</h1>
        <h2 className="text-2xl md:text-4xl font-light text-black">Arrivals</h2>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">SHOP NOW +</button> */}
      </div>
    </section>
  );
};

const ImageSection = () => {
  const categories = [
    { label: 'New Arrivals', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/New-Arrivals-Cat-icon.png?v=1699381338' },
    { label: 'Hot Selling', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Hot-Selling-Cat-icon.png?v=1699381338' },
    { label: 'Cross Body', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Cross-body-cat-icon.png?v=1699381338' },
    { label: 'Pj sets', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Pj-sets-Cat-icon.png?v=1699381338' },
    { label: 'Tote Bags', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Tote-Bag-Images.png?v=1699381338' },
    { label: 'Lingerie', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Lingerie-Cat-icon.png?v=1699381338' },
    { label: 'Jewellery', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Eye-wear-cat-icon_5f137a4f-f180-4b1e-80a6-6498942dd13f.png?v=1706549946' },
    { label: 'Clutches', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Clutches-Cat-icon.png?v=1699381338' },
    { label: 'Shoulder Bags', imgSrc: 'https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Shoulder-Bag-Cat-icon.png?v=1699381338' },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-9 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={category.imgSrc} alt={category.label} className="w-24 rounded object-cover" />
            {/* <span className="mt-2 text-center">{category.label}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
};


const Promotions = () => {
  return (
    <div data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1500">
      {/* Desktop View */}
      
      <div className="hidden md:block mb-10 bg-gray-100 p-10" >
      <div className='text-center font-montserrat font-bold text-4xl'>
        FOR YOU
      </div>
        <div className="flex flex-wrap justify-center md:px-52">
          <div className="w-1/4 p-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Jewellery-Banner-d.png?v=1706549910" alt="Jewellery" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Jewellery</h2>
                <p className="text-sm text-gray-600">NEW LAUNCH</p>
              </div> */}
            </div>
          </div>
          <div className="w-1/4 p-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Cross-Body-Bags-Banner_f4915c5c-53ac-4ec8-ac8a-8bd5848cdbdd.png?v=1706549615" alt="Cross Body Bags" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Cross body Bags</h2>
                <p className="text-sm text-gray-600">FLAT 50% OFF</p>
              </div> */}
            </div>
          </div>
          <div className="w-1/4 p-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Eye-wear-Banner_ffff692c-5a85-442d-8b9d-68f1c7580aa7.png?v=1706549614" alt="Eye wear" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Eye wear</h2>
                <p className="text-sm text-gray-600">FLAT 50% OFF</p>
              </div> */}
            </div>
          </div>
          <div className="w-1/4 p-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Lingerie-Banner_67abfbb4-55e2-4346-b866-8350e8974e8b.png?v=1706549614" alt="Lingerie" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Lingerie</h2>
                <p className="text-sm text-gray-600">FLAT 50% OFF</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4">
            <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Jewellery-Banner-d.png?v=1706549910" alt="Cross Body Bags" className="w-full" />
            {/* <div className="p-4 text-center">
              <h2 className="text-lg font-bold">Cross body Bags</h2>
              <p className="text-sm text-gray-600">FLAT 50% OFF</p>
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Cross-Body-Bags-Banner_f4915c5c-53ac-4ec8-ac8a-8bd5848cdbdd.png?v=1706549615" alt="Jewellery" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Jewellery</h2>
                <p className="text-sm text-gray-600">NEW LAUNCH</p>
              </div> */}
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Eye-wear-Banner_ffff692c-5a85-442d-8b9d-68f1c7580aa7.png?v=1706549614" alt="Eye wear" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Eye wear</h2>
                <p className="text-sm text-gray-600">FLAT 50% OFF</p>
              </div> */}
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Shoulder-Bag-desktop-view_b39af9a7-fad7-48ad-9090-a77e3e3b5651.png?v=1706549614" alt="Tote bags" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Tote bags</h2>
                <p className="text-sm text-gray-600">FLAT 50% OFF</p>
              </div> */}
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Pj-set-Banner_d83d65d7-f5e9-4119-9c75-b9dd72242873.png?v=1706549614" alt="Lingerie" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Lingerie</h2>
                <p className="text-sm text-gray-600">FLAT 50% OFF</p>
              </div> */}
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Tote-Bag-Banner_b86814e9-816f-4ebd-8755-599e2a6bac6c.png?v=1706549614" alt="PJ sets" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">PJ sets</h2>
                <p className="text-sm text-gray-600">FLAT 50% OFF</p>
              </div> */}
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0679/5372/1634/files/Jewellery-Banner-d.png?v=1706549910" alt="Shoulder bags" className="w-full" />
              {/* <div className="p-4 text-center">
                <h2 className="text-lg font-bold">Shoulder bags</h2>
                <p className="text-sm text-gray-600">FLAT 50% OFF</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold mb-4">SHOP</h2>
          <ul>
            <li>Crossbody Bags</li>
            <li>PJ Set</li>
            <li>Lingerie</li>
            <li>Shoulder Bags</li>
            <li>Clutches</li>
            <li>Tote Bags</li>
            <li>Eyewear</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-4">THE COMPANY</h2>
          <ul>
            <li>Search</li>
            <li>Shop From Daraz</li>
            <li>Contact Us</li>
            <li>Return/Exchange Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-4">STORE ADDRESS</h2>
          <address>
            NEW JAAMA SHOPING CENTER<br />
            SHOP # F - 87 R.B/8-6, H/3/1, BURNS RO<br />
            AD KARACHI
          </address>
        </div>
        <div>
          <h2 className="font-bold mb-4">NEWSLETTER SIGN UP</h2>
          <p>Sign up for exclusive updates, new arrivals & insider only discounts</p>
          <form className="mt-4 flex">
            <input type="email" placeholder="enter your email" className="p-2 flex-grow rounded-l-md" />
            <button type="submit" className="bg-white text-black p-2 rounded-r-md">SUBMIT</button>
          </form>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="bg-white p-2 rounded-full">
              {/* <FontAwesomeIcon icon={faFacebookF} className="text-black" /> */}
            </a>
            <a href="#" className="bg-white p-2 rounded-full">
              {/* <FontAwesomeIcon icon={faInstagram} className="text-black" /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};




const App = () => {
  return (
    <div>
      <LimitedStockBanner/>
      <Header />
      <ImageSection />
      <Banner />
      <Promotions/>
      <Footer/>
      
     
    </div>
  );
};

export default App;
