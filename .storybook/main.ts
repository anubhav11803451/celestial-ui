// import { StorybookConfig } from "@storybook/react/types"
const config = {
  stories: ["../packages/**/src/*.stories.@(tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ],
  framework: "@storybook/react",
}
module.exports = config
