const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        extract: 'pentacraft.css',
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );

    return {
      ...config,
      output: {
        ...config.output,
        banner: `'use client'`,
      },
    }
  },
};
