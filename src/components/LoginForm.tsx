import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string().email().max(255),
  password: z.string().min(6, { message: "Enter a valid password" }).max(255),
});

type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}
    >
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          {...register("username")}
          type="email"
          className="form-control"
          id="username"
        />
        {errors.username && (
          <small className="text-danger">{errors.username.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          {...register("password")}
          className="form-control"
          id="password"
        />
        {errors.password && (
          <small className="text-danger">{errors.password.message}</small>
        )}
      </div>
      <button disabled={isSubmitting || !isValid} className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
