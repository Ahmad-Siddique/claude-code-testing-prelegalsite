import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact - Donner Law Firm",
  description: "Contact Donner Law Firm for a free consultation. We're here to help with your legal needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-prelegal-900">
      {/* Hero */}
      <section className="bg-prelegal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-prelegal-400 max-w-2xl">Get in touch for a free consultation. We're ready to help.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Start the Conversation</h2>
              <p className="text-prelegal-600 mb-8 leading-relaxed">
                Whether you have a quick question or need comprehensive legal representation, our team is here to help.
                Fill out the form or reach out directly — we'll respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-prelegal-100 dark:bg-prelegal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-prelegal-900">Address</h3>
                    <p className="text-prelegal-600 mt-1">123 Justice Street, Suite 400<br />Legal City, LC 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-prelegal-100 dark:bg-prelegal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-prelegal-900">Phone</h3>
                    <p className="text-prelegal-600 mt-1">(555) 123-4567<br />(555) 987-6543 (After Hours)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-prelegal-100 dark:bg-prelegal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-prelegal-900">Email</h3>
                    <p className="text-prelegal-600 mt-1">info@donner-law.com<br />emergency@donner-law.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-prelegal-100 dark:bg-prelegal-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-prelegal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-prelegal-900">Office Hours</h3>
                    <p className="text-prelegal-600 mt-1">Mon–Fri: 8:00 AM – 6:00 PM<br />Sat: 9:00 AM – 1:00 PM<br />Sun: Closed (Emergency Only)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (simple server-side placeholder) */}
            <div className="bg-white dark:bg-prelegal-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <p className="text-prelegal-600 mb-8">
                Our contact form will be integrated with your backend. Please use the information above to reach us directly.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@donner-law.com"
                  className="flex items-center gap-2 bg-prelegal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-prelegal-600 transition-colors"
                >
                  Email Us Directly
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 11.08V12a2 2 0 01-2 2H3a2 2 0 01-2-2V7.91l5.13 2.12L12 4v2l3 3zM7.91 17.08l5.13-2.12L12 20v-2l-3-3z" />
                  </svg>
                </a>
                <a
                  href="tel:(555) 123-4567"
                  className="flex items-center gap-2 bg-prelegal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-prelegal-700 transition-colors"
                >
                  Call Us
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </a>
                <a
                  href="mailto:emergency@donner-law.com"
                  className="flex items-center gap-2 bg-prelegal-800 text-white px-6 py-3 rounded-full font-medium hover:bg-prelegal-700 transition-colors"
                >
                  Emergency Contact
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7l-1.41-1.41L16.16 11H8v2h8.16l4.95-4.95a2.5 2.5 0 011.75 2.36zM15 11.08V7a2 2 0 00-2-2H8a2 2 0 00-2 2v4.08l5.13 2.12L12 15v-4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}