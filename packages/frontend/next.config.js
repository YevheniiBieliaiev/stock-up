import withBundleAnalyzer from '@next/bundle-analyzer';
import { i18n } from './next-i18next.config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /libs\/.*src\/index.ts/i,
        sideEffects: false,
      },
    ];

    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
