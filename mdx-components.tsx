import type { MDXComponents } from "mdx/types";

// Required by @next/mdx in the App Router. Post styles live in app/globals.css.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return components;
}
