import { useState, useEffect } from "react";

import Header from "./components/Header";
import ListExpends from "./components/ListExpends";

import Modal from "./components/Modal";

import { generateID } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  
  const [expends, setExpends] = useState([]);
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState("");
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpend, setEditExpend] = useState({})

  useEffect(() =>{
    console.log("sisisis")
    if(Object.keys(editExpend).length >0){      
      setModal(true);     
      setTimeout(() => {
        setAnimateModal(true)
    }, 500)        
    }    
  }, [editExpend])


  const handleNewBudget = () => {
    setModal(true); 
    setEditExpend({})
    setTimeout(() => {
      setAnimateModal(true);
    }, 100);
  };

  const saveExpend = (expend) => {
    expend.id = generateID()
    expend.expendDate = Date.now()
    setExpends([...expends, expend])
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 100);

  };

  return (
    <div className={modal ? 'fijar': '' }>    
      <Header
        expends={expends}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
          < ListExpends 
            expends={expends}
            setEditExpend={setEditExpend} />
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
          editExpend={editExpend}
        />
      )}
    </div>
  );
}

export default App;
