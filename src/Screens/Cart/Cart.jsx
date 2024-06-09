import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItemFromCart, clearCart } from '../../Redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();
  
  const [showForm, setShowForm] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    city: '',
    address: '',
    email: '',
    contact: ''
  });
  const [orderDetails, setOrderDetails] = useState(null);

  const incrementHandler = (id) => {
    dispatch(incrementQuantity(id));
  };

  const decrementHandler = (id) => {
    dispatch(decrementQuantity(id));
  };

  const removeHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const placeOrderHandler = (e) => {
    e.preventDefault();
    setOrderDetails({
      userInfo,
      cartItems: [...cartItems],
      totalAmount
    });
    setOrderPlaced(true);
    // Clear cart after setting order details
    dispatch(clearCart());
  };

  console.log(cartItems)

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-8">Your Cart</h2>
      {orderPlaced && orderDetails ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Order Details</h3>
          <p><strong>Name:</strong> {orderDetails.userInfo.name}</p>
          <p><strong>City:</strong> {orderDetails.userInfo.city}</p>
          <p><strong>Address:</strong> {orderDetails.userInfo.address}</p>
          <p><strong>Email:</strong> {orderDetails.userInfo.email}</p>
          <p><strong>Contact:</strong> {orderDetails.userInfo.contact}</p>
          <h4 className="text-xl font-bold mt-4">Purchased Items</h4>
          <ul>
            {orderDetails.cartItems.map(item => (
              <li key={item.id} className="mb-2">
                {item.name} - ${item.totalPrice.toFixed(2)} (x{item.quantity})
              </li>
            ))}
          </ul>
          <div className="text-lg font-bold mt-4">
            Total Amount: ${orderDetails.totalAmount.toFixed(2)}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col">
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row justify-between items-center mb-4 bg-white p-4 shadow-lg rounded-lg">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <button onClick={() => decrementHandler(item.id)} className="btn btn-sm btn-outline">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => incrementHandler(item.id)} className="btn btn-sm btn-outline">+</button>
                      <span className="ml-4 text-gray-700">${item.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeHandler(item.id)} className="btn btn-danger mt-4 md:mt-0">Remove</button>
              </div>
            ))}
            <div className="text-lg font-bold mt-4 text-center md:text-right">
              Total Amount: ${totalAmount.toFixed(2)}
            </div>
            <div className="flex justify-center md:justify-end mt-4 space-x-4">
              <button onClick={clearCartHandler} className="btn btn-warning">Clear Cart</button>
              <button onClick={() => setShowForm(true)} className="btn btn-success">Order Now</button>
            </div>
          </div>

          {showForm && (
            <form onSubmit={placeOrderHandler} className="mt-8 max-w-lg mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">User Information</h3>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={userInfo.city}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={userInfo.contact}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">Submit Order</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
