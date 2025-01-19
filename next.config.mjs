import { resolve } from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: resolve("node_modules/process/browser.js"),
    };
    return config;
  },
};

export default nextConfig;
