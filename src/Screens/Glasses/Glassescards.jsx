import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/cartSlice';


const SunglassesCards = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItemToCart({
      id: product.id,
      name: product.name,
      newPrice: parseFloat(product.newPrice),
      image: product.image
    }));
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-2" data-aos="fade-up">
      <div className="card bg-white shadow-xl relative">
        <figure className="relative">
          <img src={product.image} alt={product.name} className='h-64 w-full object-cover' onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            -{product.discountPercentage}%
          </div>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold">{product.name}</h2>
          <div className="flex items-center mt-2">
            <span className="text-lg font-semibold line-through mr-2">${product.oldPrice}</span>
            <span className="text-lg font-semibold text-red-500">${product.newPrice}</span>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-info hover:text-white" onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SunglassesCards;
