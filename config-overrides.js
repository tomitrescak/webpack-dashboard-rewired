const { compose } = require('react-app-rewired');
// const {
//   rewireWebpack: rewireTypescript,
//   rewireJest: rewireTypescriptJest
// } = require("react-app-rewire-typescript-babel-preset");
// const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const DashboardPlugin = require('webpack-dashboard/plugin');

function rewireLoaderPlugin(config, env, definePluginOptions = {}) {
  // Add the define plugin to the list of plugins
  config.plugins = (config.plugins || [])
    .concat([new DashboardPlugin()])
  return config
}

module.exports = {
  webpack: function(config, env) {
    const rewires = compose(
      // rewireTypescript,
      // rewireReactHotLoader,
      rewireLoaderPlugin
    );

    return rewires(config, env);
  },
  // jest: function(config) {
  //   return rewireTypescriptJest(config);
  // }
};
