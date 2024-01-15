
import './App.css';
import GroceryList from './GroceryList';
import imageTwo from './abstractTwo.jpg';
import image3 from './abstract.jpg';


function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={ image3 } alt='foto' width="350px" className='list'/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
    <GroceryList/>
      <div className="container">
        <img src={ imageTwo } alt='foto' width="350px" className='list'/>
      </div>
    </div>
   
  );
}

export default App;
