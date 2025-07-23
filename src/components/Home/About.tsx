"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pt-40 text-gray-800" id="about">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4 w-full h-auto mt-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-[400px] row-span-2"
          >
            <Image
              src="/assets/feature_1.png"
              alt="Team photo 1"
              fill
              className="rounded-xl object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-36 lg:h-[190px]"
          >
            <Image
              src="/assets/feature_2.png"
              alt="Team photo 2"
              fill
              className="rounded-xl object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative h-36 lg:h-[190px]"
          >
            <Image
              src="/assets/feature_3.png"
              alt="Team photo 3"
              fill
              className="rounded-xl object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Empowering <span className="text-[#EB1700]">Teams</span> to Get More
            Done
          </h2>
          <p className="text-gray-600 mb-4 text-lg">
            At <span className="font-medium text-[#EB1700]">ZapSender</span>, we
            believe that productivity is a team effort. Our platform is built to
            simplify your day-to-day workflow so you can focus on high-impact
            tasks.
          </p>
          <p className="text-gray-600 mb-6 text-base">
            With intuitive tools, smart automation, and seamless collaboration,
            we help businesses and individuals achieve more with less effort.
            Whether you&apos;re managing a growing team or working solo,
            ZapSender adapts to your needs.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li>Efficient task tracking and scheduling</li>
            <li>Real-time team collaboration</li>
            <li>Advanced analytics for smarter decisions</li>
            <li>Secure, scalable, and cloud-based</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
