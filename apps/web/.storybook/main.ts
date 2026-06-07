import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: { enableCrashReports: false, disableWhatsNewNotifications: true },

  async viteFinal(viteConfig) {
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    viteConfig.plugins = viteConfig.plugins || [];
    viteConfig.plugins.push(tailwindcss());
    return viteConfig;
  },
};
export default config;
