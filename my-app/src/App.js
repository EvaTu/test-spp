
import './App.scss';
import productData from './data'
import Product from './components/Product/Product'

function App() {
  

  return (
    
      <div className="root-container">
        <div className="app-container">
        {productData.map(data => 
        <Product key={data.id} data={data} />
        )}
        </div>
      </div>
    
  );
}

export default App;
