import React from "react";

function MenuFilterForm() {
  return (
    <form className=" w-full flex items-center justify-center ">
      <div className="glassy-bg w-[100%] mt-2  md:w-[50%] p-4 flex gap-2 md:flex-col items-center justify-center ">
        <input
          type="text"
          placeholder="name"
          className="bg-white p-2 my-2 w-[100%] rounded text-xl"
        />
        <input
          type="text"
          placeholder="score"
          className="bg-white p-2 my-2 w-[100%] rounded text-xl"
        />
        <input
          type="text"
          placeholder="price"
          className="bg-white p-2 my-2 w-[100%] rounded text-xl"
        />
        <button className="bg-blue-500 w-[60%] p-2 rounded text-xl font-bold text-white cursor-pointer hover:bg-blue-600 duration-150">
          Submit
        </button>
      </div>
    </form>
  );
}

export default MenuFilterForm;
