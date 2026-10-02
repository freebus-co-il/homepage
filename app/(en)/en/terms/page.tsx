import { DocPage } from "@/components/doc-page";
import { metadataFor } from "@/components/root-layout";
import { terms } from "@/content/terms";

const doc = terms.en;

export const metadata = metadataFor("en", { slug: "terms", title: doc.title, description: doc.description });

export default function Page() {
  return <DocPage lang="en" slug="terms" doc={doc} />;
}
