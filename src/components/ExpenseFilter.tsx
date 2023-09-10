interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.currentTarget.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
