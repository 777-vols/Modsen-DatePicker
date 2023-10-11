const terser = require('@rollup/plugin-terser');
const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const svgr = require('@svgr/rollup');
const commonjs = require('@rollup/plugin-commonjs');
const dts = require('rollup-plugin-dts');
const path = require('path');
const alias = require('@rollup/plugin-alias');
const url = require('@rollup/plugin-url');
const packageJson = require('./package.json');

const Resolver = resolve({
  extensions: ['.mjs', '.ts', '.tsx', '.json', '.js', '.jsx'],
  browser: true
});

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      }
    ],
    external: ['react'],
    plugins: [
      babel({
        presets: ['@babel/preset-react'],
        exclude: 'node_modules/**',
        plugins: ['@babel/plugin-transform-runtime'],
        babelHelpers: 'runtime',
        external: [/@babel\/runtime/, 'react']
      }),
      peerDepsExternal(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(__dirname, 'src')
          }
        ],
        Resolver
      }),
      url(),
      terser(),
      resolve(),
      svgr({ icon: true }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['src/**/*.test.(tsx|ts)', '**/*.stories.tsx']
      }),
      postcss({
        extensions: ['.css'],
        minimize: true
      })
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    external: [/\.css$/, 'styled-components'],
    plugins: [dts.default()]
  }
];
