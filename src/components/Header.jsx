import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({expends, budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Budget Planner</h1>

      {isValidBudget ? (
        <BudgetControl 
          expends={expends} 
          budget={budget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
