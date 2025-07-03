import React from 'react';

function Allproducts() {
    return (
        <div className=" flex flex-col">
            {/* Header Section */}
            <div className="flex items-center justify-between px-16 py-2 border-b border-gray-300 bg-white">
                <ul className="flex items-center space-x-10 list-none p-4 m-0 w-full justify-between">
                   
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://www.flipkart.com/search?q=grocery+all+item&sid=eat%2C18p&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&as-pos=1&as-type=RECENT&suggestionId=grocery+all+item%7CEdible+Oil&requestId=47fe1103-848b-4d58-b889-c1b9f2850c9f&as-searchtext=grocery%20all%20item" target="_blank" rel="noopener noreferrer">
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
                      <a href="https://www.flipkart.com/search?q=applincess&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0">Appliances</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1a093759-6c42-49df-b4f5-0d96bec80393_1_372UD5BXDFYS_MC.0LS0RGMNPXTP&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_0LS0RGMNPXTP&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=0LS0RGMNPXTP" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0">Flight Bookings</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://www.flipkart.com/search?q=electronics+all&sid=h1m%2Chww&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_3_11_sc_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_3_11_sc_na_na&as-pos=3&as-type=RECENT&suggestionId=electronics+all%7CTools+and+Measuring+Equipment&requestId=8ca3e095-a01a-4ed0-a345-468a787a7ff2&as-searchtext=electronics%20all" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0">Electronics</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://www.flipkart.com/search?q=Home%26%20Furniture&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off" target="_blank" rel="noopener noreferrer">
                       <img 
                         src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" 
                         alt="Grocery" 
                         className="p-0 w-20 h-12 mb-2"
                       />
                        <span className="text-center p-0 h-64px w-64px">Home&<br/>Furniture</span>
                      </a>
                    </li>
                    <li className="text-lg p-0 flex flex-col items-center cursor-pointer flex-1">
                      <a href="https://www.flipkart.com/search?q=Two%20Wheelers&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off" target="_blank" rel="noopener noreferrer">
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
