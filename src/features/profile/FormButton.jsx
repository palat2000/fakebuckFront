function FormButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 text-blue-600 hover:bg-gray-100 rounded-md"
    >
      {children}
    </button>
  );
}

export default FormButton;
