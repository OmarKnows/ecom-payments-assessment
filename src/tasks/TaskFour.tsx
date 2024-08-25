import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  terms: boolean;
};

const TaskFour = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const password = watch("password");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          {...register("fullName", { required: "Full Name is required" })}
        />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          id="passwordConfirmation"
          type="password"
          {...register("passwordConfirmation", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.passwordConfirmation && (
          <p className="error">{errors.passwordConfirmation.message}</p>
        )}
      </div>

      <div className="form-group">
        <input
          id="terms"
          type="checkbox"
          {...register("terms", { required: "You must agree to the terms" })}
        />
        <label htmlFor="terms">I agree to the Terms</label>
        {errors.terms && <p className="error">{errors.terms.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        Register
      </button>
    </form>
  );
};

export default TaskFour;
