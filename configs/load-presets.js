const { merge } = require("webpack-merge");

const loadPresets = (env) => {
  const presets = env.presets || [];

  console.log('Loading Presets: ', presets)

  const mergedPresets = [].concat(...[presets]);
  const mergedConfig = mergedPresets.map((presetName) =>
    require(`./presets/webpack.${presetName}`)(env)
  );

  return merge({}, ...mergedConfig);
};

module.exports = loadPresets;
