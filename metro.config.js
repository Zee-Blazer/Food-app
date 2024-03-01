const { getDefaultConfig } = require('@expo/metro-config');

module.exports = getDefaultConfig(__dirname);
module.exports.resolver.assetExts.push('cjs'); // Add 'cjs' to supported extensions
