function RegisterInput({
  type = "text",
  placeholder,
  name,
  onChange,
  value,
  error,
}) {
  return (
    <input
      className={`block w-full border rounded-md outline-none px-3 py-1.5 text-sm focus:ring-1 ${
        error[name]
          ? "focus:ring-red-500 focus:border-red-600 border-red-300"
          : "focus:ring-blue-500 focus:border-blue-600 border-gray-300"
      }`}
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      value={value[name]}
    />
  );
}

export default RegisterInput;
