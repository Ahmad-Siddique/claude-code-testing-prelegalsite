"use client";

import { useParams } from "next/navigation";
import { mutualNDATemplate } from "@/lib/document-types";
import DocumentEditor from "@/components/document-editor";

export default function DocumentPage() {
  const params = useParams();
  const id = params.id as string;

  const templates: Record<string, any> = {
    "mutual-nda": mutualNDATemplate,
  };

  const template = templates[id];

  if (!template) {
    return (
      <div className="min-h-screen bg-prelegal-900 flex flex-col items-center justify-center py-24 px-4">
        <h1 className="text-white text-4xl font-bold mb-4">Document Not Found</h1>
        <a
          href="/documents"
          className="bg-prelegal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-prelegal-600 transition-colors"
        >
          Back to Templates
        </a>
      </div>
    );
  }

  return <DocumentEditor template={template} />;
}