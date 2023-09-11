import { useEffect, useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import {
  Expense,
  deleteExpense,
  getExpenses,
  addExpense,
} from "./services/fake-expense-service";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => setExpenses(getExpenses()));

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
    deleteExpense(id);
  };

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) => {
            const newExpense = {
              id: expenses.length + 1,
              ...data,
            };
            setExpenses([...expenses, newExpense]);
            addExpense(data);
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category: string) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
