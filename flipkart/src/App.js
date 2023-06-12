import logo from "./logo.svg";
import "./App.css";
import Header from "./component/mobileComponent/Header/Header";
import Categories from "./component/mobileComponent/Categories/Categories";
import Deals from "./component/mobileComponent/Deals/Deals";
import Wishlist from "./component/mobileComponent/Wishlist/Wishlist";
import Sponsor from "./component/mobileComponent/Sponsor/Sponsor";
import Spotlight from "./component/mobileComponent/Spotlight/Spotlight";
import Electronics from "./component/mobileComponent/Electronics/Electronics";
import DesktopHeader from "./component/DesktopComponent/Header/Header";
import DesktopCategories from "./component/DesktopComponent/Categories/Categories";
import Mobiles from "./component/DesktopComponent/Mobiles/Mobiles";
import DealsFashion from "./component/DesktopComponent/DealsFashion/DealsFashion";

function App() {
  return (
    <div className="App">
      <Header />
      <DesktopHeader />
      <Categories />
      <DesktopCategories />

      <Deals />

      <Wishlist />
      <Mobiles />

      <Sponsor />
      <DealsFashion />
      <Spotlight />
      <Electronics />
    </div>
  );
}

export default App;
