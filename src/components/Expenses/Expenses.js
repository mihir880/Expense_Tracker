import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].expenseTitle}
        amount={props.items[0].expenseAmount}
        date={props.items[0].expenseDate}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[1].expenseTitle}
        amount={props.items[1].expenseAmount}
        date={props.items[1].expenseDate}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[2].expenseTitle}
        amount={props.items[2].expenseAmount}
        date={props.items[2].expenseDate}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[3].expenseTitle}
        amount={props.items[3].expenseAmount}
        date={props.items[3].expenseDate}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
