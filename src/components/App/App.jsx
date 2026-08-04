import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import { defaultClothingItems } from "../../utils/clothingItems.js";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  return (
    <div className="page">
      <Header location="New Jersey" />
      <Main clothingItems={clothingItems} />
      <Footer />
    </div>
  );
}

export default App;
