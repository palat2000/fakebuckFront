function Modal({ title, children, isOpen, onClose, minWidth }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-[1px] flex items-center justify-center z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg p-4 shadow-xl min-w-[${minWidth}]`}
      >
        <div className="flex justify-between items-center text-xl border-b gap-10 py-2 ">
          <div className="invisible">x</div>
          <div className="font-semibold">{title}</div>
          <div onClick={onClose} className="text-gray-400 cursor-pointer">
            <svg
              width="1.25rem"
              height="1.25rem"
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M3 21.32L21 3.32001"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M3 3.32001L21 21.32"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
