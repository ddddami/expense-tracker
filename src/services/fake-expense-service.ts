export interface Expense {
    id: number;
    amount: number;
    description: string;
    category: string;
  }

let expenses = [
    {id: 1, description: 'First expense', amount: 12, category: 'Utilities'},
    {id: 2, description: 'Second expense', amount: 10, category: 'Entertainment'},
    {id: 3, description: 'Third expense', amount: 12, category: 'Rent'},
    {id: 4, description: 'Fourth expense', amount: 20, category: 'Utilities'},
    {id: 5, description: 'Fifth expense', amount: 25, category: 'Utilities'},
    {id: 6, description: 'Sixth expense', amount: 10, category: 'Utilities'},
    {id: 7, description: 'Seventh expense', amount: 12, category: 'Utilities'},
]

const getExpenses = () => {
    return expenses;
};

const getExpense = (id: number) => {
    return expenses.filter(e => e.id === id)[0]
}

const deleteExpense = (id: number) => {
    expenses = expenses.filter(e => e.id !== id);
}

const addExpense = (expense: Expense) => {
    expenses.push(expense)
}

export {getExpenses, getExpense, deleteExpense, addExpense};