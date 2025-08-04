import React from "react";
import MenuFoodItem from "../components/MenuFoodItem";
import MenuNavbar from "../components/MenuNavbar";
import MenuFilterForm from "../components/MenuFilterForm";
function MenuViews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 ">
      {/* right */}
      <div className="menu-img row-span-4 rounded-tl-lg h-screen hidden md:flex ">
        <MenuFilterForm />
      </div>
      {/* left */}
      <div className="menu-b bg-black row-span-4 flex flex-col rounded-tr-lg items-center p-4">
        <MenuNavbar />

        <div className="md:hidden ">
          <MenuFilterForm />
        </div>
        {/*  */}

        <div>
          <MenuFoodItem />
          <MenuFoodItem />
          <MenuFoodItem />
          <MenuFoodItem />
          <MenuFoodItem />
        </div>

        <div className="w-full h-[0.5px] bg-gray-500 mt-4"></div>
      </div>
    </div>
  );
}

export default MenuViews;
