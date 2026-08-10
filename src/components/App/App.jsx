import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { defaultClothingItems } from "../../utils/clothingItems.js";
import { getWeather, parseWeatherData } from "../../utils/weatherApi.js";
function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({
    city: "",
    temperature: null,
  });

  function handleAddClick() {
    setActiveModal("add-garment");
  }

  function handleCardClick(card) {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  useEffect(() => {
    if (!activeModal) return;

    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    }

    useEffect(() => {
      getWeather()
        .then((data) => {
          setWeatherData(parseWeatherData(data));
        })
        .catch(console.error);
    }, []);

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <Header location={weatherData.city} onAddClick={handleAddClick} />
      <Main
        weatherData={weatherData}
        clothingItems={clothingItems}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/* ...modals unchanged... */}
    </div>
  );
}

export default App;
