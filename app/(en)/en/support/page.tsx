import { DocPage } from "@/components/doc-page";
import { metadataFor } from "@/components/root-layout";
import { support } from "@/content/support";

const doc = support.en;

export const metadata = metadataFor("en", { slug: "support", title: doc.title, description: doc.description });

export default function Page() {
  return <DocPage lang="en" slug="support" doc={doc} />;
}
