
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header.jsx'
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Cart/>
      {/* <HaederCart/> */}
    </div>
  );
}

export default App;
