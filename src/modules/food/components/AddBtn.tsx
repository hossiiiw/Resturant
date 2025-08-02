import React from "react";
import { useTranslation } from "react-i18next";

function AddBtn() {
  const { t } = useTranslation();
  return (
    <button className="w-full p-2 mt-4 bg-orange-400 rounded text-xl font-bold text-white hover:bg-orange-500 transition-all duration-300 cursor-pointer">
        {t("btn.addBtn")}
    </button>
  );
}

export default AddBtn;
