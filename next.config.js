const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.symlinks = true;
    config.resolve.alias = {
      ...config.resolve.alias,
      "firebase/app": path.resolve(
        __dirname,
        "node_modules/firebase/app/dist/index.cjs.js"
      ),
      "firebase/firestore": path.resolve(
        __dirname,
        "node_modules/firebase/firestore/dist/index.cjs.js"
      ),
    };
    return config;
  },
};

module.exports = nextConfig;
