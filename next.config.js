module.exports = {
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.module.rules.push({
      test: /\.(png|jpg)$/,
      exclude: [/node_modules/, '/build/'],
      loader: 'file-loader',
      options: {
        esModule: false,
        publicPath: '/_next/static/chunks',
        outputPath: './static/chunks',
        name: !dev ? '[hash:base64].[ext]' : '[name].[ext]',
      },
    });

    return config;
  }
};
