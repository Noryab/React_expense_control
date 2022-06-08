import { useState, useEffect } from "react";



const BudgetControl = ({ expends, budget }) => {

    const [expended, setExpended] = useState(0)
    const [available, setAvailable] = useState(0)
    useEffect(()=>{    
      const totalExpended = expends.reduce((total, expend)=> expend.amount +total  , 0  )

      const totalAvailable = budget - totalExpended
      setExpended(totalExpended)
      setAvailable(totalAvailable)

    },[expends])

  const formatQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Graficxa</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Budget</span> {formatQuantity(budget)}
        </p>
        <p>
          <span>Available</span> {formatQuantity(available)}
        </p>
        <p>
          <span>Spent</span> {formatQuantity(expended)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
