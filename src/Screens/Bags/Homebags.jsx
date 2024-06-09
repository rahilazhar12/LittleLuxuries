import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bagscards from './Bagscards';
import SunglassesCards from '../Glasses/Glassescards';
import Topproducts from '../Topsellingproducts.jsx/Topproducts';

const Homebags = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Stylish Sneakers",
      discountPercentage: "50",
      image: "https://fineur.pk/cdn/shop/files/Shoot33all_0032__DSC9423.jpg?v=1695397181",
      description: "Get the best footwear !",
      oldPrice: "80.00",
      newPrice: "50.00"
    },
    {
      id: 2,
      name: "Elegant Heels",
      discountPercentage: "30",
      image: "https://fineur.pk/cdn/shop/files/Fineur5_1_570x.webp?v=1701443886",
      description: "Perfect heels for a classy evening.",
      oldPrice: "120.00",
      newPrice: "85.00"
    },
    {
      id: 3,
      name: "Casual Loafers",
      discountPercentage: "60",
      image: "https://fineur.pk/cdn/shop/files/VBHBHB-1.jpg?v=1687596431",
      description: "Comfortable loafers for everyday use.",
      oldPrice: "60.00",
      newPrice: "40.00"
    },
    {
      id: 4,
      name: "Casual Loafers",
      discountPercentage: "80",
      image: "https://fineur.pk/cdn/shop/files/image_c0f3865a-4b0e-442f-b6b1-060ed5d35aee.webp?v=1690400028",
      description: "Comfortable loafers for everyday use.",
      oldPrice: "60.00",
      newPrice: "40.00"
    },
  ];
  
  const glasses = [
    {
      id: 5,
      name: "Stylish Aviators",
      discountPercentage: "50",
      image: "https://cdn1.visiofactory.com/116161-thickbox/gucci-gg-logo-gg1579s-002-53-22-tortoise.jpg",
      description: "Look sharp with these aviators!",
      oldPrice: "120.00",
      newPrice: "60.00"
    },
    {
      id: 6,
      name: "Elegant Cat-Eyes",
      discountPercentage: "30",
      image: "https://cdn1.visiofactory.com/116558-thickbox/gucci-gg-logo-gg1660s-001-54-16-black.jpg",
      description: "Elegant sunglasses for any occasion.",
      oldPrice: "100.00",
      newPrice: "70.00"
    },
    {
      id: 7,
      name: "Classic Wayfarers",
      discountPercentage: "60",
      image: "https://cdn1.visiofactory.com/116155-thickbox/gucci-lettering-gg1583s-002-56-18-tortoise.jpg",
      description: "Timeless wayfarers for daily wear.",
      oldPrice: "80.00",
      newPrice: "32.00"
    },
    {
      id: 8,
      name: "Sporty Wraparounds",
      discountPercentage: "80",
      image: "https://cdn1.visiofactory.com/116167-thickbox/gucci-gg-logo-gg1553s-001-52-21-black.jpg",
      description: "Ideal for sports and outdoor activities.",
      oldPrice: "60.00",
      newPrice: "12.00"
    },
  ];
  
  return (
    <>
    <div className='bg-blue-300 p-4'>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 ">Crossbody Bags</h2>
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/4 p-4" data-aos="fade-right">
            <img src="https://fineur.pk/cdn/shop/files/Fineur5_1_570x.webp?v=1701443886" alt="Featured Bag" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            <p className="text-center text-lg mt-4 text-blue-900 font-bold tracking-widest">Crossbody Bags</p>
          </div>
          <div className="w-full md:w-3/4 flex flex-wrap">
            {products.map((product, index) => (
              <Bagscards key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="btn bg-white">View All</button>
        </div>
      </div>
    </div>

    <div className=' bg-yellow-400 h-2'>
      
     </div>


    <div className='bg-violet-400 p-4'>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 ">Sunglasses</h2>
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/4 p-4" data-aos="fade-right">
            <img src="https://easysight.pk/wp-content/webp-express/webp-images/uploads/2024/05/Sunglasses.jpg.webp" alt="Featured Sunglasses" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            <p className="text-center text-lg mt-4 text-blue-900 font-bold tracking-widest">Featured Sunglasses</p>
          </div>
          <div className="w-full md:w-3/4 flex flex-wrap">
            {glasses.map((product, index) => (
              <SunglassesCards key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="btn bg-white">View All</button>
        </div>
      </div>
    </div>

    <div>
      <Topproducts/>
    </div>

    </>
  );
}

export default Homebags;
