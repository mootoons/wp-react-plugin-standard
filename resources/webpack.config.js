const defaults = require('@wordpress/scripts/config/webpack.config');
const { resolve } = require('path');

module.exports = {
  ...defaults,
  entry: {
    scripts: resolve(process.cwd(), 'src', 'index.jsx'),
  },
  output: {
    filename: '[name].js',
    path: resolve(process.cwd(), '../dist'),
  },
  resolve: {
    ...defaults.resolve,
    alias: {
      ...defaults.resolve.alias,
      '@': resolve(process.cwd(), 'src'),
      '@assets': resolve(process.cwd(), 'src/assets'),
      '@config': resolve(process.cwd(), 'src/config'),
      '@components': resolve(process.cwd(), 'src/components'),
      '@services': resolve(process.cwd(), 'src/services'),
      '@pages': resolve(process.cwd(), 'src/pages'),
      '@routes': resolve(process.cwd(), 'src/routes'),
    },
  },
};
