import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-between px-16 py-2 border-b border-gray-300 bg-blue-500">
      <div>
      <img src="\Maharaja.png" alt="Logo" className="w-10"  />
      <h2 className="bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text font-bold"> Online Store</h2>
      </div>
      <div className="flex flex-col items-center">
       <input
        type="text"
        placeholder="Search for product"
        className="px-4 py-2 rounded-md text-black mb-2 w-64"  
       />
       <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
       </button>
     </div>
      
      <ul className="flex items-center space-x-10">
        <li className="text-lg text-white cursor-pointer">Signup</li>
        <li className="text-lg text-white cursor-pointer">About</li>
        <li className="text-lg text-white cursor-pointer">Products</li>
        <li className="text-lg text-white cursor-pointer">Pricing</li>
        <li className="text-lg text-white cursor-pointer">Support</li>
        <li>
          <img src="/menu.jpeg" alt="Menu" className="w-6 cursor-pointer" />
        </li>
      </ul>
      
    </div>
  );
}

export default Header;


