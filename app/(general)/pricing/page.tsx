import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Title",
  description: "Pricing description",
  keywords: ["Pricing Page", "Kevin"],
};

export default function PricingPage() {
  return <span className="text-7xl">Pricing</span>;
}
