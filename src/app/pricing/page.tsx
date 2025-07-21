const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    features: ["1,000 emails/month", "Basic templates", "Limited support"],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["10,000 emails", "Automation", "Analytics dashboard"],
    cta: "Upgrade Now",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited emails", "Custom solutions", "Dedicated support"],
    cta: "Contact Us",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-12">Choose the Plan That’s Right for You</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className="border p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="text-sm text-gray-700 mb-1">✔️ {feature}</li>
              ))}
            </ul>
            <a href="/register" className="bg-[#EB1700] text-white px-6 py-3 rounded-full hover:bg-[#c91400] text-center">
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
