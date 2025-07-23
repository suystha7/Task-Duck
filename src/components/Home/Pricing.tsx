"use client";

import { pricingPlans } from "@/data";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Pricing() {
  return (
    <main className="h-auto p-8 mt-16" id="pricing">
      <h1 className="text-3xl font-bold text-center mb-12">
        Choose the Plan That&apos;s Right for You
      </h1>

      <motion.div
        className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.name}
            className="bg-[#F9F7E0] rounded-xl shadow p-10"
            variants={cardVariants}
          >
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
            </div>
            <ul className="my-6">
              {plan.features.map((feature) => (
                <li key={feature} className="text-md text-gray-700 mb-1">
                  ✔️ {feature}
                </li>
              ))}
            </ul>
            <a
              href="/register"
              className="bg-[#EB1700] text-white px-6 py-3 mt-2 rounded-full hover:bg-[#c91400] text-center flex items-center justify-center "
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
