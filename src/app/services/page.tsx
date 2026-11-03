import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services - Donner Law Firm",
  description: "Explore our comprehensive legal services including family law, corporate law, real estate, litigation, and estate planning",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Family Law",
      description: "Compassionate legal guidance through divorce, child custody, adoption, and domestic violence matters.",
      icon: "family",
    },
    {
      title: "Corporate Law",
      description: "Strategic legal advice for business formation, contracts, mergers, acquisitions, and corporate governance.",
      icon: "corporate",
    },
    {
      title: "Real Estate",
      description: "Expert assistance with property purchases, sales, leasing, zoning, and real estate disputes.",
      icon: "real-estate",
    },
    {
      title: "Litigation",
      description: "Aggressive courtroom representation, dispute resolution, and appellate practice across all practice areas.",
      icon: "litigation",
    },
    {
      title: "Estate Planning",
      description: "Wills, trusts, probate administration, and advanced directives to protect your legacy.",
      icon: "estate",
    },
    {
      title: "Personal Injury",
      description: "Representation for accident victims seeking compensation for injuries, medical expenses, and lost wages.",
      icon: "injury",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-prelegal-900">
      {/* Hero */}
      <section className="bg-prelegal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice Areas</h1>
          <p className="text-prelegal-400 max-w-2xl">Comprehensive legal services tailored to your needs</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/contact"
                className="group block bg-white dark:bg-prelegal-900 rounded-2xl p-8 hover:shadow-xl transition-all border border-prelegal-50 hover:border-prelegal-500"
              >
                <div className="h-14 w-14 rounded-xl bg-prelegal-100 dark:bg-prelegal-800 flex items-center justify-center mb-6 group-hover:bg-prelegal-500 transition-colors">
                  <svg className="w-7 h-7 text-prelegal-500 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 3a1 1 0 011-1h1a1 1 0 110 2H5v2h14V4h-1a1 1 0 110 2h1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-prelegal-900 mb-3">{service.title}</h3>
                <p className="text-prelegal-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}