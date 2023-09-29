import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import useAuth from "../../hooks/use-auth";

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
    login(input);
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
