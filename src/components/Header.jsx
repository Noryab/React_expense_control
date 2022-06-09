import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({expends, setExpends,budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Budget Planner</h1>

      {isValidBudget ? (
        <BudgetControl 
          expends={expends} 
          setExpends={setExpends}
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget} />
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
