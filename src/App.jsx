import { useState } from "react";

import Header from "./components/Header";
import ListExpends from "./components/ListExpends";

import Modal from "./components/Modal";

import { generateID } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState("");
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expends, setExpends] = useState([]);

  const handleNewBudget = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpend = (expend) => {
    expend.id = generateID()
    setExpends([...expends, expend])
    setAnimateModal(true);
    setTimeout(() => {
      setModal(false);
    }, 500);

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
        <>
          <main>
          < ListExpends />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewBudget}
              alt="New expense icon"
              onClick={handleNewBudget}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpend={saveExpend}
        />
      )}
    </div>
  );
}

export default App;
