"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { loginValidationSchema } from "@/utils/validationSchema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setError("");
      try {
        const signInResult = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (signInResult?.error) {
          setError("Invalid email or password.");
        } else {
          window.location.href = "/";
        }
      } catch (err) {
        setError("Unexpected error occurred.");
      }
    },
  });

  return (
    <div className="min-h-screen bg-[#F9F7E0] flex items-center justify-center px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white/90 backdrop-blur-md p-10 rounded-2xl max-w-md w-full shadow-lg"
      >
        <div className="relative flex items-center justify-center mb-8">
          <button
            type="button"
            onClick={() => router.back()}
            className="absolute left-0 text-md font-bold text-black hover:underline flex items-center cursor-pointer"
          >
            <ArrowLeft className="mr-1" /> 
          </button>

          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Sign In
          </h2>
        </div>

        {error && (
          <div className="mb-4 text-red-600 font-semibold text-center">
            {error}
          </div>
        )}

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="false"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EB1700] transition ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            onChange={formik.handleChange}
            autoComplete="false"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EB1700] transition ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        <div className="mb-8 text-right">
          <Link href="/forgot-password">
            <span className="text-sm text-[#EB1700] hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </Link>
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-[#EB1700] text-white font-semibold py-3 rounded-full hover:bg-[#c91400] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formik.isSubmitting ? "Signing in..." : "Sign In"}
        </button>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <span className="text-[#EB1700] font-semibold hover:underline cursor-pointer">
              Register
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
