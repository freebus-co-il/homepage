import { AndroidPage } from "@/components/android-page";
import { metadataFor } from "@/components/root-layout";
import { dicts } from "@/lib/i18n";

const t = dicts.he;

export const metadata = metadataFor("he", { slug: "android", title: t.android_title, description: t.android_description });

export default function Page() {
  return <AndroidPage lang="he" />;
}
