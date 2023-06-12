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
import HouseEquipment from "./component/DesktopComponent/HouseEquipments/HouseEquipment";
import FeaturedBrands from "./component/DesktopComponent/FeaturedBrands/FeaturedBrands";
import OfficeEquipment from "./component/DesktopComponent/OfficeEquipments/OfficeEquipment";
import DealsElectronics from "./component/DesktopComponent/DealsElectronics/DealsElectronics";
import TopOffer from "./component/DesktopComponent/TopOffers/TopOffer";
import CaruoselMobile from "./component/mobileComponent/Carousel/CarouselMobile";
import CarouselMobile from "./component/mobileComponent/Carousel/CarouselMobile";
import CarouselDesktop from "./component/DesktopComponent/DesktopCarousel/DesktopCarousel";

function App() {
  return (
    <div className="App">
      <Header />
      <DesktopHeader />
      <Categories />
      <CarouselMobile />
      <CarouselDesktop />
      <DesktopCategories />
      <TopOffer />
      <Deals />

      <Wishlist />
      <Mobiles />

      <DealsFashion />
      <HouseEquipment />
      <FeaturedBrands />
      <OfficeEquipment />
      <DealsElectronics />
      <Sponsor />
      <Spotlight />
      <Electronics />
    </div>
  );
}

export default App;
