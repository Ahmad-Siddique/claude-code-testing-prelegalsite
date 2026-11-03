import { Metadata } from "next";
import { mutualNDATemplate } from "@/lib/document-types";

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  const template = mutualNDATemplate;
  return {
    title: `Edit Document - ${template.name}`,
    description: `Edit and view ${template.name} template`,
  };
};
