import './App.css';

export default function Mob(props) {
    return (
        <>
            <div className="main">

                
                <div id="pic">
                   <a href={props.src}>
                     <img src={props.src} alt={`${props.name} image`} /></a> 
                </div>

                <div id="content">
                    <h3>{props.name}</h3>
                    <p>5K+ bought in past month</p>
                    <button id="limited-deal">Limited time deal</button>

                    <h3>{props.price}</h3>
                     {/* Display image */}
                    <img 
                         src="https://tse4.mm.bing.net/th?id=OIP.f9g6v1lnPS_35E4G0A7JkAAAAA&pid=Api&P=0&h=180" 
                           alt="Product" 
                           style={{ width: '5%', height: 'auto', margin: '2px 0' }}/>
                      <p>FREE delivery Tue, 10 Dec<br></br>
                      Or fastest delivery Tomorrow, 9 Dec<br></br>
                      Service: Brand Installation
                      </p>

                    <button>Add to cart</button>
                    
                </div>
            </div>
        </>
    );
}
