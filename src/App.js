import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let count = 0;
  const expenses = [
    {
      id: ++count,
      expenseTitle: "Car Insurance",
      expenseAmount: 300.3,
      expenseDate: new Date(),
    },
    {
      id: ++count,
      expenseTitle: "Bike Insurance",
      expenseAmount: 400.3,
      expenseDate: new Date(2021, 10, 12),
    },
    {
      id: ++count,
      expenseTitle: "Home Insurance",
      expenseAmount: 350.3,
      expenseDate: new Date(2020, 1, 1),
    },
    {
      id: ++count,
      expenseTitle: "Health Insurance",
      expenseAmount: 600.3,
      expenseDate: new Date(2019, 2, 7),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    expenses.push(expense);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
