import { generateMetadata } from "./metadata";
import DocumentClient from "./DocumentClient";

export { generateMetadata as metadata };

export default async function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <DocumentClient id={id} />;
}