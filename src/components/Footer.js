import React from 'react';

function Footer() {
  return (
    <div className="flex items-start bg-slate-600 pt-4 pb-6 pl-8 pr-4">
      <ul className="flex items-center space-x-36">
        <li className="text-lg text-black cursor-pointer">ABOUT
          <div className='text-sm text-white cursor-pointer'>
            <li>Contect us</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
          </div>
        </li>
        <li className="text-lg text-black cursor-pointer">GROUP COMPOANIES
         <div className='text-sm text-white cursor-pointer'>
            <li>Myntra</li>
            <li>Cleatrip</li>
            <li>Shopsy</li>
          </div>
        </li>
        <li className="text-lg text-black cursor-pointer">HELP
        <div className='text-sm text-white cursor-pointer'>
            <li>Pyments</li>
            <li>Shipping</li>
            <li>Cancellation&Return</li>
            <li>FAQ</li>
          </div>
        </li>
        <li className="text-lg text-black cursor-pointer">CONSUMER POLICY
        <div className='text-sm text-white cursor-pointer'>
            <li>Cancellation&Return</li>
            <li>Tarms of Use</li>
            <li>Security</li>
            <li>Privace</li>
            <li>Sitemap</li>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default Footer;