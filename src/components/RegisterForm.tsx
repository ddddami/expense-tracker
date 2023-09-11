import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 chars." }),
    username: z.string().email().max(255),
    password1: z
      .string()
      .min(6, { message: "Enter a valid password" })
      .max(255),
    password2: z
      .string()
      .min(6, { message: "Enter a valid password" })
      .max(255),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords don't match",
    path: ["password2"],
  });

type RegisterFormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}
    >
      <h2>Register</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register("name")} className="form-control" id="name" />
        {errors.name && (
          <small className="text-danger">{errors.name.message}</small>
        )}
      </div>
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
        <label htmlFor="password1" className="form-label">
          Password
        </label>
        <input
          {...register("password1")}
          className="form-control"
          id="password1"
          type="password"
        />
        {errors.password1 && (
          <small className="text-danger">{errors.password1.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password2" className="form-label">
          Re-type password
        </label>
        <input
          {...register("password2")}
          type="password"
          className="form-control"
          id="password2"
        />
        {errors.password2 && (
          <small className="text-danger">{errors.password2.message}</small>
        )}
      </div>
      <button disabled={isSubmitting} className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
