import { DocPage } from "@/components/doc-page";
import { metadataFor } from "@/components/root-layout";
import { terms } from "@/content/terms";

const doc = terms.he;

export const metadata = metadataFor("he", { slug: "terms", title: doc.title, description: doc.description });

export default function Page() {
  return <DocPage lang="he" slug="terms" doc={doc} />;
}
