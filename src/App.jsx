import React from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider"
import ProductionSection from "./Components/ProductionSection";
import GeneraMovieList from "./Components/GeneraMovieList";

function App() {
  return (
    <div className="">
      <Header/>
      <Slider/>
      <ProductionSection/>
      <GeneraMovieList/>
    </div>
  );
}

export default App;
