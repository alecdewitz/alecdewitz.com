import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
};

const withMDX = createMDX({
  options: {
    // Plugins are referenced by name so they work with Turbopack.
    rehypePlugins: [["rehype-pretty-code", { theme: "github-light" }]],
  },
});

export default withMDX(nextConfig);
