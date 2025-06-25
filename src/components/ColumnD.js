import React from 'react'; 

function ColumnD() {
    return (
      <>
       <div>
       <ul className=" p-4 flex items-center space-x-10 ">
        <li>
          <img
           className=' cursor-pointer'
           src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/c672c84275180b63.jpg?q=20'
           alt="Example"
              onClick={() => console.log("Image clicked!")}
          />

        </li>
        <li>
        <img
          className=' cursor-pointer'
          src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/f9c6194cb85e9e6c.jpg?q=20'
          alt="Example"
             onClick={() => console.log("Image clicked!")}
        />

        </li>
        <li>
        <img 
          className=' cursor-pointer'
          src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/535433b694119da2.jpg?q=20'
          alt="Example"
             onClick={() => console.log("Image clicked!")}
        />

        </li>
       </ul>
       </div>

       <div>
       <ul className=" p-4 flex items-center space-x-10 ">
        <li>
          <img
            className=' cursor-pointer'
            src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/ac08848171d5f6db.jpg?q=20'
            alt="Example"
               onClick={() => console.log("Image clicked!")}
           />

        </li>
        <li>
        <img 
         className='cursor-pointer'
         src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/e25f155035a2b662.jpg?q=20'
         alt="Example"
            onClick={() => console.log("Image clicked!")}
         />

        </li>
        <li>
        <img
         className=' cursor-pointer'
         src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4ddd4a135657a6e4.jpeg?q=20'
         alt="Example"
            onClick={() => console.log("Image clicked!")}
         />

        </li>
       </ul>
       </div>
      </>
    ) 
  }

  export default ColumnD