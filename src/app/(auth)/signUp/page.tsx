"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {t("signUp.title1")}
        </h2>
        <p className="text-center text-gray-500 mb-8">{t("signUp.title2")}</p>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              {t("signUp.firstname")}
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
              placeholder={t("signUp.placeholder1")}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              {t("signUp.lastname")}
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
              placeholder={t("signUp.placeholder2")}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {t("signUp.number")}
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
              placeholder={t("signUp.placeholder3")}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t("signUp.email")}
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
              placeholder={t("signUp.placeholder4")}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              {t("signUp.password")}
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 placeholder-gray-400"
              placeholder={t("signUp.placeholder5")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200"
          >
            {t("signUp.signUp")}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm"> {t("login.or")}</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Signup Button */}
        <button className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition duration-200">
          <FcGoogle size={24} />
          {t("signUp.google")}
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          {t("signUp.signIn")}
          <Link href="/login" className="text-blue-600 hover:underline">
            {t("signUp.login")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
