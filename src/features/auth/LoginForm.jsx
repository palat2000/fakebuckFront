import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import useAuth from "../../hooks/use-auth";
import { toast } from "react-toastify";

function LoginForm() {
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });

  const { login } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((err) =>
      toast.error(err.response?.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    );
  };

  return (
    <form onSubmit={handleSubmitForm} className="grid gap-4">
      <LoginInput
        placeholder="Email address or phone number"
        value={input.emailOrMobile}
        name="emailOrMobile"
        onChange={handleChangeInput}
      />
      <LoginInput
        type="password"
        placeholder="Password"
        value={input.password}
        name="password"
        onChange={handleChangeInput}
      />
      <LoginButton />
    </form>
  );
}

export default LoginForm;
