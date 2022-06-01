import { useState } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";

import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState("");
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewBudget = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpend = (expend) => {
    return expend;
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className="nuevo-gasto">
          <img
            src={IconNewBudget}
            alt="New expense icon"
            onClick={handleNewBudget}
          />
        </div>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
    </div>
  );
}

export default App;
