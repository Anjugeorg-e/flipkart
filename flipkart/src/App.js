import logo from './logo.svg';
import './App.css';
import Header from './component/mobileComponent/Header/Header';
import Categories from './component/mobileComponent/Categories/Categories';
import Deals from './component/mobileComponent/Deals/Deals';
import Wishlist from './component/mobileComponent/Wishlist/Wishlist';
import Sponsor from './component/mobileComponent/Sponsor/Sponsor';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />

      <Deals />
      <Wishlist />
      <Sponsor />
    </div>
  );
}

export default App;
