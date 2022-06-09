import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


const BudgetControl = ({ expends, budget }) => {

    const [expended, setExpended] = useState(0)
    const [available, setAvailable] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(()=>{    
      const totalExpended = expends.reduce((total, expend)=> expend.amount +total  , 0  )
      const totalAvailable = budget - totalExpended

      const newPercentage = (((budget - totalAvailable) / budget) * 100 ).toFixed(2)
            
      setExpended(totalExpended)
      setAvailable(totalAvailable)

      setTimeout(() => {
        setPercentage(newPercentage)
      },500)

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
        <CircularProgressbar
            styles={buildStyles({
                pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                trailColor: '#F5F5F5',
                textColor: percentage > 100 ? '#DC2626' : '#3B82F6',
            })}
            value={percentage}
            text={`${percentage}% Expended `}
        />

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
