import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    basePath: '',
    output: 'export',
    distDir: 'out',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    skipTrailingSlashRedirect: true,
};

export default nextConfig;
