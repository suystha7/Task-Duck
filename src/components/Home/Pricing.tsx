import { pricingPlans } from "@/data";

export default function Pricing() {
  return (
    <main className="h-auto p-8 mt-16" id="pricing">
      <h1 className="text-3xl font-bold text-center mb-12">
        Choose the Plan That’s Right for You
      </h1>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className="bg-[#F9F7E0] rounded-xl shadow p-10">
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
          </div>
        ))}
      </div>
    </main>
  );
}
