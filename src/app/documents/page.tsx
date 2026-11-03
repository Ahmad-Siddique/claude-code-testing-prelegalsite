import Link from "next/link";
import { mutualNDATemplate } from "@/lib/document-types";

export const metadata = {
  title: "Documents - Donner Law Firm",
  description: "Browse and create prelegal documents with our document editor",
};

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-prelegal-900">
      {/* Hero */}
      <section className="bg-prelegal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Document Templates</h1>
          <p className="text-prelegal-400 max-w-2xl">
            Browse our library of prelegal document templates. Fill out the cover page, customize the terms, and generate your documents.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/documents/mutual-nda"
              className="group block bg-white dark:bg-prelegal-900 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-prelegal-50 hover:border-prelegal-500"
            >
              <div className="h-14 w-14 rounded-xl bg-prelegal-100 dark:bg-prelegal-800 flex items-center justify-center mb-6 group-hover:bg-prelegal-500 transition-colors">
                <svg className="w-7 h-7 text-prelegal-500 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="13" y2="17" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-prelegal-900 mb-3">{mutualNDATemplate.name}</h3>
              <p className="text-prelegal-600 text-sm leading-relaxed mb-4">
                {mutualNDATemplate.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-prelegal-500">v{mutualNDATemplate.version}</span>
                <span className="text-prelegal-400">{mutualNDATemplate.license}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}