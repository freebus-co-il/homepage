import { AndroidPage } from "@/components/android-page";
import { metadataFor } from "@/components/root-layout";
import { dicts } from "@/lib/i18n";

const t = dicts.en;

export const metadata = metadataFor("en", { slug: "android", title: t.android_title, description: t.android_description });

export default function Page() {
  return <AndroidPage lang="en" />;
}
