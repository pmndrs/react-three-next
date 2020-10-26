// @js-ignore

/* eslint-disable no-undef */
const path = require("path");
const withSass = require("@zeit/next-sass");
const plugins = require("next-compose-plugins");
const images = require("next-images");
const videos = require("next-videos");
const fonts = require("next-fonts");
const reactSvg = require("next-react-svg");

const withTM = require("next-transpile-modules")(["@react-three/drei", "three", "postprocessing"]);

const nextConfig = {
  target: "serverless",
  webpack: (config) => {
    // config.resolve = config.resolve || {};

    // config.resolve.modules = [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')];

    // config.module.rules.push({
    //   test: /(\.jsx|\.js)$/,
    //   loader: "eslint-loader",
    //   exclude: /node_modules/,
    //   options: {
    //     emitWarning: true,
    //   },
    // })

    return config;
  },
};

module.exports = plugins(
  [
    withSass({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      },
    }),
    [images, { exclude: path.resolve(__dirname, "src/assets/svg") }],
    [reactSvg, { include: path.resolve(__dirname, "src/assets/svg") }],
    fonts,
    videos,
    withTM,
  ],
  nextConfig
);
