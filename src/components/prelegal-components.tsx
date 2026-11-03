import Image from "next/image";

/* Hero Section */
export function HeroSection() {
  return (
    <section className="bg-prelegal-900 text-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Justice Made Visible
        </h1>
        <p className="text-prelegal-400 md:text-prelegal-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          We provide comprehensive legal services with integrity, expertise, and dedication to protect your rights and interests.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about" className="bg-prelegal-500 text-white px-8 py-4 rounded-full font-medium hover:bg-prelegal-600 transition-colors">
            Learn More
          </a>
          <a href="#contact" className="border border-prelegal-400 text-prelegal-500 px-8 py-4 rounded-full font-medium hover:border-prelegal-500 hover:text-prelegal-800 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

/* About Section */
export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-prelegal-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Firm</h2>
            <p className="text-prelegal-600 mb-6 leading-relaxed">
              With over 15 years of experience, our firm has been committed to providing exceptional legal counsel across multiple practice areas. We believe in delivering justice through integrity, transparency, and personalized attention to every client.
            </p>
            <ul className="list-disc list-inside space-y-4 text-prelegal-700">
              <li>
                <strong className="font-medium">Family Law</strong> – Compassionate guidance through divorce, custody, and adoption matters.
              </li>
              <li>
                <strong className="font-medium">Corporate Law</strong> – Strategic advice for businesses of all sizes.
              </li>
              <li>
                <strong className="font-medium">Real Estate</strong> – Expert assistance with purchases, sales, and leasing.
              </li>
              <li>
                <strong className="font-medium"> litigation</strong> – Aggressive representation in court proceedings.
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/firm-image.jpg"
              alt="Our law firm team"
              width={600}
              height={400}
              className="rounded-xl object-cover hover:opacity-90 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Practice Areas */
export function PracticeAreasSection() {
  return (
    <section className="py-24 md:py-32 bg-prelegal-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-prelegal-900 text-center mb-16">Practice Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Family Law Card */}
          <div className="bg-white dark:bg-prelegal-900 rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-prelegal-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 18C9 17.45 9.45 17 10 17H14C14.55 17 15 17.45 15 18V21H9V18ZM11 7H13V15H9V7ZM15 7H17V15H13V7Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-prelegal-900 mb-3">Family Law</h3>
            <p className="text-prelegal-600 text-sm">Divorce, custody, adoption, and domestic violence protection.</p>
          </div>

          {/* Corporate Law Card */}
          <div className="bg-white dark:bg-prelegal-900 rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-prelegal-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h2v2H3v-2zm0-8h2v6H3V10zm11 4h2v2h-2V14zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm-9-10V2h2l3 3h2l3-3h2l3-3H42l3 3H25V2h-2l-3 3H14l-3 3H8V2H7v2H4zm3 8H10V15h4v2h-4v-2zm-5.5 5.5c0-.83-.67-1.5-1.5-1.5S9 17.67 9 18s.67.5 1.5.5s1.5-.67 1.5-1.5S10.33 13 9 13zM14 13c0-.83-.67-1.5-1.5-1.5S11.5 11.5 11 11s.5.67.5 1.5S11.83 13 12 13zM19 13c0-.83-.67-1.5-1.5-1.5S16.5 11.5 15 11s.5.67.5 1.5S16.5 13 15 13z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-prelegal-900 mb-3">Corporate Law</h3>
            <p className="text-prelegal-600 text-sm">Mergers, acquisitions, contracts, and corporate governance.</p>
          </div>

          {/* Real Estate Card */}
          <div className="bg-white dark:bg-prelegal-900 rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-prelegal-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.5 13.5c0 .35-.13.53-.35.67l2.25 1.5c.08.05.13.11.2.18.11.08.17.1.26.05.1-.08.17-.13.23-.22l1.5 2.25c.05.1.08.17.05.26-.05.1-.13.17-.22.25l-2.25 1.5c-.05.08-.11.13-.2.18l-2.25-1.5c-.08-.05-.13-.11-.18-.2-.05-.08-.1-.17-.18-.2H22v-2h-1.5zM12 5.5c-.83 0-1.5.67-1.5 1.5v3.5L9 15h6V5.5zm0 9.5c-.83 0-1.5.67-1.5 1.5v3.5l-3 3v-3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5-1.5v-3.5l3 3v-3.5zm6-9.5c0-.83-.67-1.5-1.5-1.5S9 6 9 6.83V7h2v.17C11 8.17 11.67 8 12.5 8s1.5.17 1.5.33v.17zM4.25 6.75l1.5-2.25h6l1.5 2.25H15v12H4.25V6.75zm7.5 0h-1.5V3h1.5v3.75zm0 8.25h-1.5V11h1.5v3.75zM6.5 3H5v2h1.5V3zm0 11h-1.5v2h1.5V13zm3-10v2h.5v8-.5H12v-2H9v2H6.5V13H5v-2h1.5v2H6.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-prelegal-900 mb-3">Real Estate</h3>
            <p className="text-prelegal-600 text-sm">Purchases, sales, leasing, and zoning matters.</p>
          </div>

          {/* Litigation Card */}
          <div className="bg-white dark:bg-prelegal-900 rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-prelegal-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M10 12a2 2 0 002 2h4a2 2 0 002-2M10 12l8.5 4.5L15.5 12l-8.5 4.5"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-prelegal-900 mb-3">Litigation</h3>
            <p className="text-prelegal-600 text-sm">Court representation, dispute resolution, and appellate practice.</p>
          </div>

          {/* Estate Planning Card */}
          <div className="bg-white dark:bg-prelegal-900 rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-prelegal-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.59 8.1c-.58-.34-1.26-.55-1.97-.6l2.08-1.35c.12-.31.27-.59.45-.87a3.8 3.8 0 00-.15-2.08c-.16-.58-.46-.97-.97-.97a3.8 3.8 0 00-2.08.15l-1.35 2.08c-.31.12-.59.27-.87.45l-2.08-1.35c-.34-.58-.55-1.26-.6-1.97a.75.75 0 00-.12-.87l-1.95-1.95a.75.75 0 00-.87-.12l-1.83 1.83c-.58.34-1.08.65-1.5.97a1.691 1.691 0 00-.12.87l1.83 1.95c-.42.58-.97 1.08-1.5.97a1.691 1.691 0 00-.87-.12l-1.95-1.95c-.34-.58-.55-1.26-.6-1.97a.75.75 0 00-.87-.12l-1.95 1.95c-.58.34-1.08.65-1.5.97a1.691 1.691 0 00-.12.87l1.95 1.95c-.42.58-.97 1.08-1.5.97a1.691 1.691 0 00-.87.12l-1.95 1.95c-.34.58-.55 1.26-.6 1.97a.75.75 0 00.12.87l1.95-1.95c.58-.34 1.08-.65 1.5-.97a1.691 1.691 0 00.87-.12l1.95-1.95c.42-.58.97-1.08 1.5-.97.58.34.97.87 1.5.97m-8.61-1.4a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-prelegal-900 mb-3">Estate Planning</h3>
            <p className="text-prelegal-600 text-sm">Wills, trusts, and probate administration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Testimonials Section */
export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-prelegal-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-white dark:bg-prelegal-800 rounded-2xl p-8 text-center transition-colors">
            <div className="h-12 w-12 rounded-full bg-prelegal-500 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a2 2 0 00-2 2v3h2V7h3v9h2V7h3v9h2V7h3v9h2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v3l3 3v9a2 2 0 002 2h3v-9h2v9a2 2 0 002 2h3v-9h2zm-7.06 5.25a.75.75 0 01-.71-.23l-1.35-1.35a.75.75 0 111.05-.98l1.35 1.35a.75.75 0 01.23.71zM10.5 14.5a4 4 0 100-8 4 4 0 000 8z"/>
              </svg>
            </div>
            <p className="text-prelegal-700 text-lg leading-relaxed mb-6">"The team was incredibly professional and compassionate during my difficult family law case. They guided me through every step with expertise and care."</p>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/client1.jpg"
                alt="Client testimonial 1"
                width={40}
                height={40}
                className="rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-prelegal-500 text-sm">Corporate Executive</p>
              </div>
            </div>
          </article>

          <article className="bg-white dark:bg-prelegal-800 rounded-2xl p-8 text-center transition-colors">
            <div className="h-12 w-12 rounded-full bg-prelegal-500 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a2 2 0 00-2 2v3h2V7h3v9h2V7h3v9h2V7h3v9h2V7h3v9h2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v3l3 3v9a2 2 0 002 2h3v-9h2zm-7.06 5.25a.75.75 0 01-.71-.23l-1.35-1.35a.75.75 0 111.05-.98l1.35 1.35a.75.75 0 01.23.71zM10.5 14.5a4 4 0 100-8 4 4 0 000 8z"/>
              </svg>
            </div>
            <p className="text-prelegal-700 text-lg leading-relaxed mb-6">"Excellent representation in my corporate merger. The attorneys were knowledgeable, responsive, and truly fought for my best interests."</p>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/client2.jpg"
                alt="Client testimonial 2"
                width={40}
                height={40}
                className="rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-prelegal-500 text-sm">Tech Entrepreneur</p>
              </div>
            </div>
          </article>

          <article className="bg-white dark:bg-prelegal-800 rounded-2xl p-8 text-center transition-colors">
            <div className="h-12 w-12 rounded-full bg-prelegal-500 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a2 2 0 00-2 2v3h2V7h3v9h2V7h3v9h2V7h3v9h2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v3l3 3v9a2 2 0 002 2h3v-9h2zm-7.06 5.25a.75.75 0 01-.71-.23l-1.35-1.35a.75.75 0 111.05-.98l1.35 1.35a.75.75 0 01.23.71zM10.5 14.5a4 4 0 100-8 4 4 0 000 8z"/>
              </svg>
            </div>
            <p className="text-prelegal-700 text-lg leading-relaxed mb-6">"Real estate transaction completed smoothly and efficiently. Every detail was handled with precision and communication was excellent throughout the process."</p>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/client3.jpg"
                alt="Client testimonial 3"
                width={40}
                height={40}
                className="rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-medium">David Rodriguez</p>
                <p className="text-prelegal-500 text-sm">Homeowner</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/* Contact Section */
export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-prelegal-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-prelegal-400 mb-8">Have questions or need legal assistance? Reach out to us using the form below or contact our office directly.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 text-prelegal-400 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 1h-3c-.6 0-1.1.3-1.4.8l-4.1 7A2.5 2.5 0 0112.3 21 2.5 2.5 0 0110.7 17.8L7.4 9.9c-.3-.5-.8-1.1-1.5-1.5L3 15l.9-1.3c.5-.8 1.1-1.5 1.9-1.5t1.4.7l4.1 7c.5.8.9 1.4 1.5 1.5a2.5 2.5 0 010 2.8 2.5 2.5 0 01-1.7-.2L5 23l5-2.8c.6-.2 1.1-.5 1.5-1.1zm-11-6.3c-.4 0-.8.2-1.1.5l-5 1.6 1.6-5c.2-.5.5-1.1.8-1.5.4-.6.5-1.3.5-2.1 0-.9-.3-1.8-.8-2.5z"/>
                </svg>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-prelegal-500 mt-1">123 Justice Street, Legal City</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 text-prelegal-400 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 1h-3c-.6 0-1.1.3-1.4.8l-4.1 7A2.5 2.5 0 0112.3 21 2.5 2.5 0 0110.7 17.8L7.4 9.9c-.3-.5-.8-1.1-1.5-1.5L3 15l.9-1.3c.5-.8 1.1-1.5 1.9-1.5t1.4.7l4.1 7c.5.8.9 1.4 1.5 1.5a2.5 2.5 0 010 2.8 2.5 2.5 0 01-1.7-.2L5 23l5-2.8c.6-.2 1.1-.5 1.5-1.1zm-11-6.3c-.4 0-.8.2-1.1.5l-5 1.6 1.6-5c.2-.5.5-1.1.8-1.5.4-.6.5-1.3.5-2.1 0-.9-.3-1.8-.8-2.5z"/>
                </svg>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-prelegal-500 mt-1">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 text-prelegal-400 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4.18V2h1v.18l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5h12l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5h12l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5h12l.7 1.5H2l.7 1.5H2l.7 1.5h12.5l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5h12v2.18l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5h12v2.18H2v2.18h12v2.18H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5H2l.7 1.5h12v2.18H2V4.18zM2 6.88h16v1.5H2V6.88zM2 11.88h16v1.5H2V11.88zM2 16.88h16v1.5H2V16.88z"/>
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-prelegal-500 mt-1">info@donner-law.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-prelegal-800 rounded-2xl p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-prelegal-200 bg-prelegal-50 focus:outline-none focus:ring-2 focus:ring-prelegal-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-prelegal-200 bg-prelegal-50 focus:outline-none focus:ring-2 focus:ring-prelegal-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-prelegal-200 bg-prelegal-50 focus:outline-none focus:ring-2 focus:ring-prelegal-500 focus:border-transparent transition-colors">
                  <option value="">Select a practice area</option>
                  <option>Family Law</option>
                  <option>Corporate Law</option>
                  <option>Real Estate</option>
                  <option>Litigation</option>
                  <option>Estate Planning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-prelegal-200 bg-prelegal-50 focus:outline-none focus:ring-2 focus:ring-prelegal-500 focus:border-transparent transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-prelegal-500 text-white px-8 py-4 rounded-full font-medium hover:bg-prelegal-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Footer */
export function Footer() {
  return (
    <footer className="bg-prelegal-950 text-prelegal-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold mb-4">Donner Law Firm</h3>
            <p className="text-prelegal-500 text-sm">Providing exceptional legal services since 2008.</p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-prelegal-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 2.86c.32-.04.65-.08.98-.12.28-.04.53-.08.75-.12.43-.09.87-.14 1.33-.14.69 0 1.26.1 1.7.3l.32.08c.56.14 1.04.39 1.44.71.44.36.75.78.89 1.28.14.5.17.93.15 1.37-.03.57-.1 1.07-.15 1.52-.07.57-.17 1.07-.3 1.5a15.23 15.23 0 01-.76 2.94 6.36 6.36 0 01-1.95 1.58c-.36.15-.65.3-.88.52-.21.2-.46.38-.7.52-.27.15-.52.25-.76.3-.25.05-.5.08-.74.08-1.18 0-1.79-.33-2.19-.98-.32-.55-.5-.99-.65-1.37-.16-.4-.24-.76-.26-1.09-.03-.36-.05-.69-.06-1.02a7.79 7.79 0 00-.24-1.35 7.82 7.82 0 00-1.82-.61 7.87 7.87 0 00-2.09-.26c-.54-.1-.96-.17-1.33-.17-.55 0-.94.05-1.26.17a7.73 7.73 0 00-1.09.62 7.81 7.81 0 00-.74 1.62c-.17.74-.13 1.37.06 2.03.17.63.43 1.21.76 1.72.3.5.57.93.89 1.3.3.37.58.68.86 1.02.28.34.44.77.56 1.18.12.41.22.8.3 1.17.08.03.16.05.28.08.1.03.21.05.31.08.1.03.3-.03.41-.08.1-.1.15-.1.25-.1.15-.1.3-.1.45zM3.85 7.43a5.94 5.94 0 00-.78 4.22 5.96 5.96 0 00.78 4.22 5.94 5.94 0 011.51.26 5.94 5.94 0 013.86.08c2.55 0 4.72-.87 6.43-2.5.66-.65 1.13-1.43 1.47-2.33.27-.65.43-1.43.53-2.33.1-.78.13-1.65.13-2.53 0-.98-.13-1.85-.38-2.63-.21-.65-.47-1.23-.78-1.72-.3-.5-.65-.88-.95-1.16-.3-.28-.55-.55-.78-.78a5.98 5.98 0 00-.78-1.51 5.96 5.96 0 00-1.51-.78 5.94 5.94 0 00-.08-3.86c0-2.55.87-4.72 2.5-6.43.65-.66 1.43-1.13 2.33-1.47.65-.27 1.43-.43 2.33-.53.78-.1 1.65-.13 2.53-.1.98 0 1.85.38 2.63.21.65.47 1.23.78 1.72.3.5.65.88 1.16 1.16.5.28.93.46 1.3.65.37.19.69.3 1.02.42.33.12.59.24.84.36.25.12.46.24.67.36.2.12.3.25.3.48a5.95 5.95 0 01-.95 2.28 5.95 5.95 0 01-2.28.95 5.95 5.95 0 01-.95-2.28 5.95 5.95 0 01.36-2.63z"/>
                </svg>
              </a>
              <a href="#" className="text-prelegal-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-7v-4h7a2 2 0 000-4h-7v-7h7a6 6 0 016 6zM1.5 5.37a4.08 4.08 0 117.72 0A4.08 4.08 0 011.5 5.37zm1.5 9.05a5.78 5.78 0 100-11.56 5.78 5.78 0 000 11.56z"/>
                </svg>
              </a>
              <a href="#" className="text-prelegal-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.18 10.98 10.98 0 01-6.77 2.83C8.5 2.29 7.2 1.5 5.93 1.18l-4.81 2.85A5.96 5.96 0 003 8c0 4.41 3.58 8 8 8 .37.08.73.14 1.08.22l3.71 1.38c.37.14.75.23 1.13.28.52.06.97.16 1.34.31a10.94 10.94 0 016.87 2.07l4.38-2.55a11.06 11.06 0 01-2.08 6.89 11.04 11.04 0 01-7.85-3.07 11.02 11.02 0 01-3.8 1.95 10.95 10.95 0 01-6.18-.99A11.05 11.05 0 001.5 23.5 10.94 10.94 0 00.5 17.5c0-4.53 3.55-8.22 8-8.22a11.05 11.05 0 017.9 1.06l-.37.01a10.96 10.96 0 015.3 8.83l4.44-2.61.01-.37zM8.5 13.5a5 5 0 105 5A5 5 0 008.5 13.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-prelegal-800 text-center">
          <p className="text-prelegal-500 text-sm">© 2026 Donner Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}