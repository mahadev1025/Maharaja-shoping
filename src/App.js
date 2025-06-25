import './App.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Advertisement from './components/Advertisement';
import AllProducts from './components/AllProducts';
import ColumnB from './components/ColumnB';
import ColumnC from './components/ColumnC';
import ColumnD from './components/ColumnD';
import ColumnE from './components/ColumnE';



function App() {
  return (
    
    <>

      <Header />
      <AllProducts />
      <br />
      <Advertisement />
      <Main />
      <div className="margin-top">
        <ColumnB />
      </div>
      <ColumnE />
      <ColumnC />
      <ColumnD />
      <Footer />
    </>
  );
}

export default App;


