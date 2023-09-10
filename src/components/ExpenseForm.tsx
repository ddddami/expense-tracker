interface Props {
  categories: string[];
}
const ExpenseForm = ({ categories }: Props) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input type="text" className="form-control" id="amount" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select className="form-select" id="category" name="category">
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="btn btn-primary">Submit</div>
      </form>
    </div>
  );
};

export default ExpenseForm;
