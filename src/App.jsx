import { useState, useEffect } from "react";

import Header from "./components/Header";
import ListExpends from "./components/ListExpends";

import Modal from "./components/Modal";

import { generateID } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  
  const [expends, setExpends] = useState(localStorage.getItem('expends') ? JSON.parse(localStorage.getItem('expends')) : []);
  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0);
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

  useEffect(() =>{
    localStorage.setItem('budget', budget ?? 0)
  },[budget] )

  useEffect(() =>{
    localStorage.setItem('expends', JSON.stringify(expends) ?? [] )
  },[expends] )


  useEffect(() =>{
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS>0){
      setIsValidBudget(true)
    }
  }, [])


  const handleNewBudget = () => {
    setModal(true); 
    setEditExpend({})
    setTimeout(() => {
      setAnimateModal(true);
    }, 100);
  };

  const saveExpend = (expend) => {

    if(expend.id){
      //edit
      const updatedExpends = expends.map( expendState => expendState.id=== expend.id? expend: expendState)
      setExpends(updatedExpends)
      setEditExpend({})
    }else{
      //new
      expend.id = generateID()
      expend.expendDate = Date.now()
      setExpends([...expends, expend])
    }
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 100);  
  };

  const deleteExpend = id =>{
      const updateExpends = expends.filter(expend => expend.id !== id)
      setExpends(updateExpends)
  }

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
            setEditExpend={setEditExpend}
            deleteExpend ={deleteExpend} />
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
          setEditExpend={setEditExpend}
        />
      )}
    </div>
  );
}

export default App;
