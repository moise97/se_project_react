import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getItems } from "../../utils/api.js";
import { getWeather, parseWeatherData } from "../../utils/weatherApi.js";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
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
    getWeather()
      .then((data) => {
        setWeatherData(parseWeatherData(data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <Header location={weatherData.city} onAddClick={handleAddClick} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              weatherData={weatherData}
              clothingItems={clothingItems}
              onCardClick={handleCardClick}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              clothingItems={clothingItems}
              onCardClick={handleCardClick}
              onAddClick={handleAddClick}
            />
          }
        />
      </Routes>
      <Footer />
      <ModalWithForm
        title="New garment"
        name="add-garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
      >
        <label className="modal__label">
          Name
          <input
            type="text"
            className="modal__input"
            placeholder="Name"
            required
          />
        </label>
        <label className="modal__label">
          Image
          <input
            type="url"
            className="modal__input"
            placeholder="Image URL"
            required
          />
        </label>
        <fieldset className="modal__radio-fieldset">
          <legend className="modal__legend">Select the weather type:</legend>
          <label className="modal__radio-label">
            <input type="radio" name="weather" value="hot" /> Hot
          </label>
          <label className="modal__radio-label">
            <input type="radio" name="weather" value="warm" /> Warm
          </label>
          <label className="modal__radio-label">
            <input type="radio" name="weather" value="cold" /> Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        isOpen={activeModal === "preview"}
        card={selectedCard}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
