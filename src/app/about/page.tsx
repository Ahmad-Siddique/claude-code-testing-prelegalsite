import Image from "next/image";

export const metadata = {
  title: "About Us - Donner Law Firm",
  description: "Learn about our law firm, our history, and the team behind our legal services",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-prelegal-900">
      {/* Hero */}
      <section className="bg-prelegal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Firm</h1>
          <p className="text-prelegal-400 max-w-2xl">Committed to justice, integrity, and exceptional legal representation since 2008.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-prelegal-600 mb-6 leading-relaxed">
                Founded by a team of dedicated attorneys, Donner Law Firm was established to provide accessible, high-quality legal services to individuals and businesses. Over the years, we have built a reputation for excellence, integrity, and results.
              </p>
              <p className="text-prelegal-600 mb-6 leading-relaxed">
                Our philosophy is simple: every client deserves personalized attention and a legal strategy tailored to their unique circumstances. We work closely with each client to understand their goals and deliver solutions that protect their rights and interests.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <p className="text-4xl font-bold text-prelegal-500">15+</p>
                  <p className="text-prelegal-600">Years of Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-prelegal-500">500+</p>
                  <p className="text-prelegal-600">Cases Handled</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-prelegal-500">98%</p>
                  <p className="text-prelegal-600">Client Satisfaction</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-prelegal-500">24/7</p>
                  <p className="text-prelegal-600">Support Available</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/firm-image.jpg"
                alt="Our law firm"
                width={600}
                height={400}
                className="rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-prelegal-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Founding Partner",
                bio: "Specializes in family law and civil litigation with over 15 years of experience.",
              },
              {
                name: "James Patterson",
                role: "Senior Partner",
                bio: "Expert in corporate law, mergers, and acquisitions for Fortune 500 companies.",
              },
              {
                name: "Elena Vasquez",
                role: "Partner",
                bio: "Leads our real estate and estate planning practice with meticulous attention to detail.",
              },
            ].map((member) => (
              <article key={member.name} className="bg-white dark:bg-prelegal-900 rounded-2xl p-6 text-center">
                <Image
                  src="/team-member.jpg"
                  alt={member.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover mx-auto mb-4 w-40 h-40"
                  loading="lazy"
                />
                <h3 className="text-xl font-medium text-prelegal-900">{member.name}</h3>
                <p className="text-prelegal-500 text-sm mb-3">{member.role}</p>
                <p className="text-prelegal-600 text-sm leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}