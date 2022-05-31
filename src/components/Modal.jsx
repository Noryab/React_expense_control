import CloseBtn from "../img/cerrar.svg";

const Modal = ({ setModal }) => {
  const fruits = ["kjsd", "kjsd", "kjsd", "kjsd"];
  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Close modal" onClick={hideModal} />
      </div>

      <form>
        <legend> New expend</legend>
      </form>
    </div>
  );
};

export default Modal;
