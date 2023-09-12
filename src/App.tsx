import { useEffect, useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseService, { Expense } from "./services/expense-service";
import UserContext from "./contexts/UserContext";

import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import userService from "./services/user-service";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    userService
      .getUser()
      .then((res) => setUser({ id: res.data.id, name: res.data.name }));
  }, []);
  useEffect(() => {
    ExpenseService.getAllExpenses()
      .then((res) => setExpenses(res.data))
      .catch((ex) => console.log(ex));
  }, []);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleDelete = (id: number) => {
    const originalExpenses = [...expenses];
    setExpenses(expenses.filter((e) => e.id !== id));
    ExpenseService.deleteExpense(id).catch(() => setExpenses(originalExpenses));
  };

  const handleSubmit = (data: any) => {
    const originalExpenses = [...expenses];
    setExpenses([{ ...data, id: expenses.length + 1 }, ...expenses]);
    ExpenseService.saveExpense(data)
      .then((res) => setExpenses([res.data, ...originalExpenses]))
      .catch((ex) => {
        console.log(ex.message);
        setExpenses(originalExpenses);
      });
  };

  // return (
  //   <div>
  //     <div className="mb-5">
  //       <ExpenseForm onSubmit={handleSubmit} />
  //     </div>
  //     <div className="mb-3">
  //       <ExpenseFilter
  //         onSelectCategory={(category: string) => setSelectedCategory(category)}
  //       />
  //     </div>
  //     <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
  //   </div>
  // );
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <RegisterForm />
      </UserContext.Provider>
    </>
  );
};

export default App;
