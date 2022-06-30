import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  //Below is the combined state approach. You have to initialize all values at the same time
  //THis will replace old state with new state for all 3 values. That is why you have to initialize all values everytime
  /*const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });*/

  const titleChangeHandler = (event) => {
    //Assign using combine approach
    /*setUserInput({ ...userInput, inputTitle: event.target.value });*/

    // Another way for combine approach (this is good approach, ensures latest state execution)
    /*setUserInput=(prevState) => {
      return { ...userInput, inputTitle: event.target.value };
    };*/

    setInputTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: parseFloat(inputAmount),
      date: new Date(inputDate),
    };

    setInputTitle("");
    setInputAmount("");
    setInputDate("");
    //calling parent function (child to parent)
    props.onSaveExpenseData(expenseData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={inputTitle}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={inputAmount}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2030-12-31"
              onChange={dateChangeHandler}
              value={inputDate}
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
