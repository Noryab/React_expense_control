import { useEffect, useState } from "react";
import Message from "./Message";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({ 
    setModal, 
    animateModal,
    setAnimateModal, 
    saveExpend, 
    editExpend,
    setEditExpend
  }) => {

  const [message, setMessage] = useState("");
  const [expendName, setExpendName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expendDate, setDate] = useState("");
  const [id, setId] = useState("")

  useEffect(() =>{
    if(Object.keys(editExpend).length>0){      
      setExpendName(editExpend.expendName)
      setAmount(editExpend.amount)
      setCategory(editExpend.category)     
      setId(editExpend.id) 
      setDate(editExpend.expendDate)
    }

  }, [])

  const hideModal = () => {
    setAnimateModal(false);
    setEditExpend({})
    
    setTimeout(() => {
      setModal(false);
    }, 100);
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
    saveExpend({expendName, amount, category, id, expendDate})
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

        <legend>{editExpend.expendName ? "Edit expend" : "New expend"}</legend>
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
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <div className="campo">
            <label htmlFor="categoria">Category</label>
            <select
              id="categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">---select---</option>
              <option value="ahorro">Ahorro</option>
              <option value="food">Food</option>
              <option value="home">Home</option>
              <option value="expends">Expends</option>
              <option value="salud">Salud</option>
              <option value="subscriptions">Subscriptions</option>
            </select>
          </div>

          <input type="submit" value={editExpend.expendName ? "Edit expend" : "Add expend"} />
        </div>
      </form>
    </div>
  );
};

export default Modal;
