import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../services/categories";

interface Props {
  onSubmit: (expense: ExpenseFormData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 chars" })
    .max(255),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            className="form-control"
            id="description"
          />
          {errors.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
            id="amount"
          />
          {errors.amount && (
            <small className="text-danger">{errors.amount.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            {...register("category")}
            className="form-select"
            id="category"
            name="category"
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <small className="text-danger">{errors.category.message}</small>
          )}
        </div>
        <button disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
