import { DocPage } from "@/components/doc-page";
import { metadataFor } from "@/components/root-layout";
import { privacy } from "@/content/privacy";

const doc = privacy.en;

export const metadata = metadataFor("en", { slug: "privacy", title: doc.title, description: doc.description });

export default function Page() {
  return <DocPage lang="en" slug="privacy" doc={doc} />;
}
