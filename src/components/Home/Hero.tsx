"use client";
import Image from "next/image";
import React from "react";
import FeatureCard from "./FeaturedCard";
import { features } from "@/data";

const Hero = () => {
  return (
    <div className="bg-[#F9F7E0] h-[110vh]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Grow Your Business with Smart Email Marketing
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Automate, design, and analyze your email campaigns all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/register"
              className="bg-[#EB1700] text-white px-6 py-3 rounded-full hover:bg-[#c91400] text-center"
            >
              Get Started Free
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 hidden md:flex">
          <Image
            src="/assets/bg_cover.png"
            width={500}
            height={500}
            alt="bg"
            className="w-full"
          />
        </div>
      </div>

      <section className="py-10 px-6 grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Hero;
