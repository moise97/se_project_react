import "./DeleteConfirmModal.css";

function DeleteConfirmModal({ isOpen, onClose, onConfirm }) {
  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`modal modal_type_delete ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_delete">
        <button
          className="modal__close-btn"
          type="button"
          onClick={onClose}
        ></button>
        <p className="modal__warning">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          className="modal__confirm-btn"
          type="button"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>
        <button className="modal__cancel-btn" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
