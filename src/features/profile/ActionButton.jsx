function ActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 py-2 px-3 rounded-lg hover:bg-gray-300 font-semibold flex gap-2 items-center"
    >
      {children}
    </button>
  );
}

export default ActionButton;
