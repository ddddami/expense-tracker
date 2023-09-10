import { useEffect, useState } from "react";
import ExpenseList from "./components/ExpenseList";
import {
  Expense,
  deleteExpense,
  getExpenses,
} from "./services/fake-expense-service";
import ExpenseFilter from "./components/ExpenseFilter";

const categories = ["Groceries", "Utilities", "Entertainment"];

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
      <div className="mb-3">
        <ExpenseFilter
          categories={categories}
          onSelectCategory={(category: string) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
