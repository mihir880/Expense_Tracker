import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseDataHandler = (inputExpenseData) => {
    const expenseData = { ...inputExpenseData, id: Math.random() };
    //calling parent function (child to parent)
    props.onAddExpense(expenseData);
  };
  return (
    <>
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={expenseDataHandler} />
      </div>
    </>
  );
};

export default NewExpense;
