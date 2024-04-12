import React from "react";
import Header from "./component/Header.js";
import MainSection from "./component/MainSection.js";
import Lightbox from "./component/Lightbox.js";
function App() {
  return (
    <>
      <Header />
      <Lightbox products={products} />
      <MainSection />
    </>
  );
}

export default App;
