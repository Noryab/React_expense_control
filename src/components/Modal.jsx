import { useEffect, useState } from "react";
import Message from "./Message";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const [message, setMessage] = useState("");
  const [expendName, setExpendName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([expendName, amount, category].includes("")) {
      setMessage("All fields are required");

      setTimeout(() => {
        setMessage("");
      }, 3000);

      return;
    }
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Close modal" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>New expend</legend>
        {message && <Message type="error">{message}</Message>}

        <div className="campo">
          <label htmlFor="name">Expend name</label>
          <input
            id="name"
            type="text"
            placeholder="Add the expend name"
            value={expendName}
            onChange={(e) => setExpendName(e.target.value)}
          />

          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Add the expend amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="campo">
            <label htmlFor="categoria">Category</label>
            <select
              id="categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">select</option>
              <option value="ahorro">Ahorro</option>
              <option value="Food">Food</option>
              <option value="House">House</option>
              <option value="Expends">Expends</option>
              <option value="Salud">Salud</option>
              <option value="Subscriptions">Subscriptions</option>
            </select>
          </div>

          <input type="submit" value="Add expend" />
        </div>
      </form>
    </div>
  );
};

export default Modal;
