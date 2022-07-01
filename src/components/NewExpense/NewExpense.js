import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDataHandler = (inputExpenseData) => {
    const expenseData = { ...inputExpenseData, id: Math.random().toString() };
    //calling parent function (child to parent)
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <>
      <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={expenseDataHandler} stopEditing={stopEditingHandler} />}
      </div>
    </>
  );
};

export default NewExpense;
