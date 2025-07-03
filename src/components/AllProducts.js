import React from 'react';

function Allproducts() {
    return (
        <div className=" flex flex-col">
            {/* Header Section */}
            <div className="flex items-center justify-between px-16 py-2 border-b border-gray-300 bg-white">
                <ul className="flex items-center space-x-10 list-none p-4 m-0 w-full justify-between">
                   
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0">Grocery</span>
                      </a>
                    </li>

                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" 
                         alt="Grocery" 
                         className="p-0 w-15 h-12 mb-2"
                       />
                        <span className="text-center p-0">Mobiles</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0">Appliances</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0">Flight Bookings</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0">Electronics</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0 h-64px w-64px">Home&<br/>Furniture</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0 h-64px w-64px">Two Wheelers</span>
                      </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Allproducts;
