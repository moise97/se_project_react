import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useForm } from "../../hooks/useForm.js";

const defaultValues = { name: "", imageUrl: "", weather: "" };

function AddItemModal({ isOpen, onAddItem, onCloseModal }) {
  const { values, handleChange, setValues } = useForm(defaultValues);

  function handleReset() {
    setValues(defaultValues);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values, handleReset);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          autoComplete="off"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-fieldset">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />{" "}
          Hot
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
