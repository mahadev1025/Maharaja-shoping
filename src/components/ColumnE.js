import React from 'react'; 

function ColumnE() {
    return (
      <>
      <div className='@mediya'>
        <ul >
        <img
            className="cursor-pointer"
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/350/image/af0e3446615bdd7c.jpg?q=20"
            alt="Example"
               onClick={() => console.log("Image clicked!")}
          />

        </ul>
      </div>
       <div>
       <ul className=" p-4 flex items-center space-x-10 ">
        <li>
          <img 
          className='cursor-pointer'
          src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/887753a581e879af.png?q=20'
            alt="Example"
            onClick={() => console.log("Image clicked!")}
          />

        </li>
        <li>
        <img
        className='cursor-pointer'
        src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/295ca24c084e1bb5.jpg?q=20'
        alt="Example"
           onClick={() => console.log("Image clicked!")}
        
        />

        </li>
        <li >
        <img 
        className='cursor-pointer'
        src='https://rukminim1.flixcart.com/fk-p-flap/520/280/image/1f461cd5218533a8.jpg?q=20'
        alt="Example"
           onClick={() => console.log("Image clicked!")}
        />

        </li>
       </ul>
       </div>
      </>
    ) 
  }

  export default ColumnE