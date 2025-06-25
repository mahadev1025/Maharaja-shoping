import React from 'react'; 

function ColumnB() {
    return (
      <>
        <div class="p-4 flex flex-col ">
        <h1 className='text-start text-4xl p-5 p-y-axis-1  font-bold '>All Products</h1>
        <div className='p-4 flex overflow-x-auto p-4 overflow-hidden  whitespace-nowrap gap-4 justify-evenly'>
        <div className="card w-64 h-auto bg-white rounded-xl p-6 hover:bg-slate-300 hover:scale-105 cursor-pointer"
                                                                     onClick={() => (window.location.href = "/your-target-path")}>
              <img className='rounded-md h-40 w-40 ' src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/1/x/j/-original-imagsgfbgrfhy7vm.jpeg?q=70" />
              <p>Earbuds wireless</p>
              <p className='text-green-700'>Bank offer</p>
              <span className='line-through'>₹5,999</span>
              <span className='font-bold bold'> ₹2,299</span> 
              <span className='text-green-700'> 61%off</span>
              <br/><br/>
              <button className='btn bg-blue-600 text-white p-2 w-44 rounded-lg transform transition-transform duration-300 hover:bg-green-600 hover:scale-105'>Add to cart</button>
          </div>
          <div className="card w-64 h-auto bg-white rounded-xl p-6 hover:bg-slate-300 hover:scale-105 cursor-pointer"
                                                                     onClick={() => (window.location.href = "/your-target-path")}>
              <img className='rounded-md h-40 w-40' src='https://rukminim2.flixcart.com/image/612/612/k4a7c7k0/printer/y/j/z/canon-e3370-original-imafn2wyyxjjvzd6.jpeg?q=70' />
              <p>Printers</p>
              <p className='text-green-700'>Special price</p>
              <span className='line-through'>₹6,995</span>
              <span className='font-bold bold'> ₹5,499</span> 
              <span className='text-green-700'> 21%off</span>
              <br/><br/>
              <button className='btn bg-blue-600 text-white p-2 w-44 rounded-lg transform transition-transform duration-300 hover:bg-green-600 hover:scale-105'>Add to cart</button>
          </div>
          <div className="card w-64 h-auto bg-white rounded-xl p-6 hover:bg-slate-300 hover:scale-105 cursor-pointer"
                                                                     onClick={() => (window.location.href = "/your-target-path")}>
              <img className='rounded-md h-40 w-40' src="https://m.media-amazon.com/images/I/81Mxj7AOQlL._SX679_.jpg" />
              <p>Wireless Dusk to Dawn</p>
              <p><img className='h-5 w-12' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png'/></p>
              <span className='line-through'>₹899</span>
              <span> ₹359</span> 
              <span className='text-green-700'> 60%off</span>
              <br/><br/>
              <button className='btn bg-blue-600 text-white p-2 w-44 rounded-lg transform transition-transform duration-300 hover:bg-green-600 hover:scale-105'>Add to cart</button>
          </div>
          <div className="card w-64 h-auto bg-white rounded-xl p-6 hover:bg-slate-300 hover:scale-105 cursor-pointer"
                                                                     onClick={() => (window.location.href = "/your-target-path")}>
              <img className='rounded-md h-40 w-40' src="https://rukminim2.flixcart.com/image/612/612/xif0q/projector/o/u/w/k9-pro-eo9022-10-eo9022-led-projector-egate-original-imah6ccw5kfdkqrv.jpeg?q=70" />
              <p>Projectors</p>
              <p className='text-green-700'>Special price</p>
              <span className='line-through'>₹30,000</span>
              <span className='font-bold bold'> ₹9,990</span>
              <span className='text-green-700'> 66%off</span>  
              <br/><br/>
              <button className='btn bg-blue-600 text-white p-2 w-44 rounded-lg transform transition-transform duration-300 hover:bg-green-600 hover:scale-105'>Add to cart</button>
          </div>
          <div className="card w-64 h-auto bg-white rounded-xl p-6 hover:bg-slate-300 hover:scale-105 cursor-pointer"
                                                                     onClick={() => (window.location.href = "/your-target-path")}>
              <img className='rounded-md h-40 w-40' src="https://rukminim2.flixcart.com/image/312/312/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70" />
              <p>Monitors</p>
              <p><img className='h-5 w-12' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png'/></p>
              <span className='line-through'>₹12,690</span>
              <span className='font-bold bold'> ₹6,699</span>
              <span className='text-green-700'> 47%off</span>  
              <br/><br/>
              <button className='btn bg-blue-600 text-white p-2 w-44 rounded-lg transform transition-transform duration-300 hover:bg-green-600 hover:scale-105'>Add to cart</button>
          </div>
          <div className="card w-64 h-auto bg-white rounded-xl p-6 hover:bg-slate-300 hover:scale-105 cursor-pointer"
                                                                     onClick={() => (window.location.href = "/your-target-path")}>
              <img className='rounded-md h-30 w-40' src='https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70' />
              <p>Smartwatch</p>
              <p><img className='h-5 w-12' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png'/></p>
              <span className='line-through'>₹4,999</span>
              <span className='font-bold bold'> ₹1,399</span>
              <span className='text-green-700'> 72%off</span> 
              <p className='text-green-700'>Bank offer</p> 
              <br/>
              <button className='btn bg-blue-600 text-white p-2 w-44 rounded-lg transform transition-transform duration-300 hover:bg-green-600 hover:scale-105'>Add to cart</button>
          </div>
          <div className="card w-64 h-auto bg-white rounded-xl p-6 hover:bg-slate-300 hover:scale-105 cursor-pointer"
                                                                     onClick={() => (window.location.href = "/your-target-path")}>
              <img className='rounded-md h-35 w-35' src='https://rukminim2.flixcart.com/image/312/312/xif0q/computer/p/k/z/-original-imagqdrx8aphxhv2.jpeg?q=70' />
              <br/><br/>
              <p>Laptops</p>
              <p><img className='h-5 w-12' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png'/></p>
              <span className='line-through'>₹98,990</span>
              <span className='font-bold bold'> ₹70,990</span>
              <span className='text-green-700'> 28%off</span> 
              <br/><br/>
              <button className='btn bg-blue-600 text-white p-2 w-44 rounded-lg transform transition-transform duration-300 hover:bg-green-600 hover:scale-105'>Add to cart</button>
          </div>
          <div className="card w-64 h-auto bg-white rounded-xl p-6 hover:bg-slate-300 hover:scale-105 cursor-pointer"
                                                                     onClick={() => (window.location.href = "/your-target-path")}>
              <img className='rounded-md h-25 w-30' src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/d/i/y29-5g-v2420-vivo-original-imah7tz3jg9rgyef.jpeg?q=70' />
              <p>mobile</p>
              <p><img className='h-5 w-12' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png'/></p>
              <span className='line-through'>₹21,990</span>
              <span className='font-bold bold'> ₹16,999</span>
              <span className='text-green-700'> 28%off</span> 
              <br/>
              <button className='btn bg-blue-600 text-white p-2 w-44 rounded-lg transform transition-transform duration-300 hover:bg-green-600 hover:scale-105'>Add to cart</button>
          </div> 
        </div>
        <style jsx>{`
        .p-4::-webkit-scrollbar {
          display: none;
        }
        .card:hover {
          transform: scale(1.05);
        }
      `}</style>
        <br/><br/><br/><br/>
        </div> 

      </>
    ) 
  }

  export default ColumnB