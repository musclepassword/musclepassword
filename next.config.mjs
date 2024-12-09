/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    // antd & deps
    "@ant-design",
    "@rc-component",
    "antd",
    "rc-util",
    "react-i18next",
    "rc-pagination",
    "rc-picker",
    "rc-input",
    "rc-button",
    "rc-slider",
    "rc-tooltip"
  ],
};

export default nextConfig;