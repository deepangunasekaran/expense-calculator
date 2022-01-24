import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const SAMPLE_EXPENSES = [
  {
    id: "e1",
    title: "Mutual Funds",
    amount: 5000,
    date: new Date(2022, 0, 14),
  },
  {
    id: "e2",
    title: "Mobile",
    amount: 50000,
    date: new Date(2021, 8, 20),
  },
  {
    id: "e3",
    title: "Medical Insurance",
    amount: 8000,
    date: new Date(2021, 1, 12),
  },
  {
    id: "e4",
    title: "Laptop",
    amount: 61000,
    date: new Date(2020, 4, 21),
  },
];
function App() {
  const [expensesList, setExpenseList] = useState(SAMPLE_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("App.js");
    setExpenseList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expensesList);
  };

  return (
    <div className="App">
      <h1>Expense Calculator</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;