const Button = ({ color }) => {
  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          RED
        </button>
      </div>
    </div>
  );
};

export default Button;
