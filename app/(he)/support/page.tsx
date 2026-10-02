import { DocPage } from "@/components/doc-page";
import { metadataFor } from "@/components/root-layout";
import { support } from "@/content/support";

const doc = support.he;

export const metadata = metadataFor("he", { slug: "support", title: doc.title, description: doc.description });

export default function Page() {
  return <DocPage lang="he" slug="support" doc={doc} />;
}
