import apiClient from "./api-client";

export interface Expense {
    id: number;
    amount: number;
    description: string;
    category: string;
  }

const getAllExpenses = () => { return apiClient.get<Expense[]>('/expenses') }


const getExpense = (id: number) => {
    return apiClient.get<Expense>('/expenses' + `/${id}`)

}

const deleteExpense = (id: number) => {
    return apiClient.delete('/expenses' + `/${id}`)
}

const saveExpense = (expense: Expense) => {
    return apiClient.post<Expense>('/expenses/', expense)
}

const updateExpense = (expense: Expense) => {
    return apiClient.patch('/expenses' + `/${expense.id}`, expense)
}
export default { getAllExpenses, getExpense, saveExpense, deleteExpense, updateExpense };