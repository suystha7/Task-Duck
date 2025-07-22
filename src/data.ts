import { BarChart3, MousePointerClick, Workflow } from "lucide-react";

export const features = [
  {
    icon: MousePointerClick,
    title: "Drag & Drop Builder",
    description: "Create professional emails in minutes, no coding required.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Set up triggers to send the right message at the right time.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track opens, clicks, conversions and optimize your campaigns.",
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "1,000 emails/month",
      "Basic templates",
      "Limited support",
      "Single user access",
      "Email list up to 500 contacts",
      "Basic email analytics",
      "Limited scheduling options",
      "Drag & drop editor",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: [
      "10,000 emails/month",
      "Automation workflows",
      "Analytics dashboard",
      "A/B testing",
      "Email list up to 10,000 contacts",
      "Advanced templates",
      "Multiple users (up to 5)",
      "Custom branding",
      "Priority email support",
    ],
    cta: "Upgrade Now",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited emails",
      "Custom automation solutions",
      "Dedicated account manager",
      "24/7 priority support",
      "Email list up to 1 million contacts",
      "AI-powered insights",
      "Custom integrations (CRM, Zapier, etc.)",
      "SSO & enterprise-grade security",
      "Onboarding & migration assistance",
    ],
    cta: "Contact Us",
  },
];