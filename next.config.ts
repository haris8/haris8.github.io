import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Vinext beta.5 skips prerenders when its slash redirect runs during export.
  // The postbuild step creates directory indexes for GitHub Pages instead.
  trailingSlash: false,
};

export default nextConfig;
