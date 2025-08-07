"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";
import { IFormInputs, ILoginForm } from "@/types/type";

function LoginPage() {
  const [user, setUser] = useState<IFormInputs>();
  const [formData, setFormdata] = useState<ILoginForm>();
  const [flag, setFlag] = useState<boolean>(false);
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const onSubmit = (data: ILoginForm) => {
    setFormdata(data);
    const response = {
      token: "kafdjhkldfhsaKLHGSDKLsdfajkiwtr",
      expire: 7,
    };

    if (data.email === user?.email && data.password === user?.password) {
      router.push("/");
      Cookies.set("loginToken", response.token, { expires: response.expire });
    }
    if (
      user?.email !== formData?.email &&
      user?.password !== formData?.password
    ) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {t("login.title1")}
          </h2>
          <p className="text-center text-gray-500 mb-8">{t("login.title2")}</p>

          {/* Form */}
          {/* ----------------Error-------------- */}
          <div className="w-full flex items-center justify-center">
            {flag ? <p className="text-red-600">{t("login.alret")}</p> : ""}
          </div>
          {/* ----------------Error-------------- */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* ----------------gmail--------------- */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("login.label1")}
              </label>
              <input
                {...register("email", { required: `${t("signUp.alert1")}` })}
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
                placeholder={t("login.placeholder1")}
              />
            </div>
            {/* ----------------password--------------- */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {t("login.lable2")}
              </label>
              <input
                {...register("password", { required: `${t("signUp.alert1")}` })}
                type="password"
                id="password"
                className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
                placeholder={t("login.placeholder2")}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="mr-2"> {t("login.remember")}</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                {t("login.forget")}
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200"
            >
              {t("login.login")}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm"> {t("login.or")}</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Login Button */}
          <button className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition duration-200">
            <FcGoogle size={24} />
            {t("login.google")}
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            {t("login.account")}
            <Link href="/signUp" className="text-blue-600 hover:underline">
              {t("login.SignIn")}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
