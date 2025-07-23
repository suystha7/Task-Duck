"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { registerValidationSchema } from "@/utils/validationSchema"; 
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [error, setError] = useState("");
    const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTerms: false,
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      setError("");
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Registration failed");
          return;
        }

        const signInResult = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (signInResult?.error) {
          setError("Registration succeeded but login failed.");
        } else {
          window.location.href = "/login";
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
         <div className="relative flex items-center justify-center mb-4 gap-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="absolute left-0 text-md font-bold text-black hover:underline flex items-center cursor-pointer"
          >
            <ArrowLeft className="mr-1" /> 
          </button>

          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Create Account
          </h2>
        </div>

        {error && (
          <div className="mb-4 text-red-600 font-semibold text-center">{error}</div>
        )}

        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-1"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EB1700] transition ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
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

        {/* Password */}
        <div className="mb-5">
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
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EB1700] transition ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-5">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-semibold mb-1"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EB1700] transition ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="mb-8 flex items-center gap-3">
          <input
            type="checkbox"
            id="acceptedTerms"
            name="acceptedTerms"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.acceptedTerms}
            className="w-5 h-5 rounded border border-gray-300 focus:ring-2 focus:ring-[#EB1700]"
          />
          <label
            htmlFor="acceptedTerms"
            className="text-gray-700 text-sm select-none"
          >
            I agree to the{" "}
            <a href="/terms" target="_blank" className="text-[#EB1700] underline">
              Terms and Conditions
            </a>
          </label>
        </div>
        {formik.touched.acceptedTerms && formik.errors.acceptedTerms && (
          <p className="text-red-600 text-sm mt-1 mb-6">{formik.errors.acceptedTerms}</p>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-[#EB1700] text-white font-semibold py-3 rounded-full hover:bg-[#c91400] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formik.isSubmitting ? "Registering..." : "Register"}
        </button>

        {/* Sign In Link */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link href="/login" legacyBehavior>
            <a className="text-[#EB1700] font-semibold hover:underline">Sign In</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
