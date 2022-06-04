const BudgetControl = ({ budget }) => {
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
          <span>Available</span> {formatQuantity(0)}
        </p>
        <p>
          <span>Spent</span> {formatQuantity(0)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
