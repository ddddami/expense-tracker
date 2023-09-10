import { useEffect, useState } from "react";
import ExpenseList from "./components/ExpenseList";
import {
  Expense,
  deleteExpense,
  getExpenses,
} from "./services/fake-expense-service";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  useEffect(() => setExpenses(getExpenses()));

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
    deleteExpense(id);
  };
  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
