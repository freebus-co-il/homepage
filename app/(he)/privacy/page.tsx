import { DocPage } from "@/components/doc-page";
import { metadataFor } from "@/components/root-layout";
import { privacy } from "@/content/privacy";

const doc = privacy.he;

export const metadata = metadataFor("he", { slug: "privacy", title: doc.title, description: doc.description });

export default function Page() {
  return <DocPage lang="he" slug="privacy" doc={doc} />;
}
