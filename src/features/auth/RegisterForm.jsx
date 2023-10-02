import { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";
import RegisterInput from "./RegisterInput";
import InputErrorMessage from "./InputErrorMessage";
import useAuth from "../../hooks/use-auth";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
    return result;
  }
};

function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({});

  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setErrorMessage(validationError);
    }
    setErrorMessage({});
    register(input).catch((err) => {
      toast.error(err.response?.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-2 gap-y-3 py-3"
    >
      <div>
        <RegisterInput
          placeholder="First name"
          onChange={handleChangeInput}
          value={input}
          name="firstName"
          error={errorMessage}
        />
        {errorMessage.firstName && (
          <InputErrorMessage message={errorMessage.firstName} />
        )}
      </div>
      <div>
        <RegisterInput
          placeholder="Last name"
          onChange={handleChangeInput}
          value={input}
          name="lastName"
          error={errorMessage}
        />
        {errorMessage.lastName && (
          <InputErrorMessage message={errorMessage.lastName} />
        )}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeholder="Email address or phone number"
          onChange={handleChangeInput}
          value={input}
          name="emailOrMobile"
          error={errorMessage}
        />
        {errorMessage.emailOrMobile && (
          <InputErrorMessage message={errorMessage.emailOrMobile} />
        )}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeholder="Password"
          type="password"
          onChange={handleChangeInput}
          value={input}
          name="password"
          error={errorMessage}
        />
        {errorMessage.password && (
          <InputErrorMessage message={errorMessage.password} />
        )}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeholder="Confirm password"
          type="password"
          onChange={handleChangeInput}
          value={input}
          name="confirmPassword"
          error={errorMessage}
        />
        {errorMessage.confirmPassword && (
          <InputErrorMessage message={errorMessage.confirmPassword} />
        )}
      </div>
      <div className="col-span-full mx-auto">
        <button className="bg-green-600 text-white rounded-lg px-5 py-1.5 text-lg font-semibold">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
