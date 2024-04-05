import React from "react";
import { useState } from "react";
import { data } from "./data.js";
import Header from "./component/Header.js";
function App() {
  const [products] = useState(data);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
