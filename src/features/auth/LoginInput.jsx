function LoginInput({ placeholder, name, type = "text", value, onChange }) {
  return (
    <input
      className="block w-full focus:ring-1 focus:border-blue-500 focus:ring-blue-300 rounded-md px-4 py-3 outline-none border border-gray-300"
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}

export default LoginInput;
