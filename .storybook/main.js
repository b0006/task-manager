const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // Handle SCSS modules
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '../src/styles'),
              path.resolve(__dirname, '../node_modules'),
            ],
          },
        },
      },
    },
  ],
  webpackFinal: async (baseConfig) => {
    const nextConfig = require('../next.config.js');

    // Needed for SVG importing using svgr
    const indexOfRuleToRemove = baseConfig.module.rules.findIndex((rule) =>
      rule.test.toString().includes('svg')
    );
    baseConfig.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      include: path.resolve(__dirname, '../src/assets/'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false,
      },
    });
    baseConfig.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });
    // Merge your next webpack config with this base
    return { ...nextConfig.webpack, ...baseConfig };
  },
}
