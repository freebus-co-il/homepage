import type { ReactNode } from "react";
import { RootLayout, metadataFor, viewport as sharedViewport } from "@/components/root-layout";

export const metadata = metadataFor("he");
export const viewport = sharedViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <RootLayout lang="he">{children}</RootLayout>;
}
