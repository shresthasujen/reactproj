import "./App.css";
import "./css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainSlider from "./js/slider";
import SearchBox from "./layouts/searchbox";
const Home = () => {
  return (
    <>
      {" "}
      <Navbar />
      <MainSlider></MainSlider>
      <SearchBox></SearchBox> <Footer />
    </>
  );
};
export default Home;
<script src="./js/slider.js"></script>;
