import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import resolve  from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typeScript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import postcssUrl from 'postcss-url';
import react from 'react';
import reactDom from 'react-dom';
import includePaths from 'rollup-plugin-includepaths';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const getPlugins = () => [
  replace({
    'process.env.NODE_ENV': '"production"',
  }),
  includePaths({
    include: {},
    paths: ['.'],
    external: [],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
  }),
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
  }),
  babel({
    extensions: [
      ...DEFAULT_EXTENSIONS,
      '.ts',
      '.tsx',
    ],
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      react: Object.keys(react),
      'react-dom': Object.keys(reactDom)
    }
  }),
  typeScript({
    tsconfig: 'client/tsconfig.json',
  }),
  postcss({
    plugins: [
      postcssUrl({
        url: 'inline', // enable inline assets using base64 encoding
        maxSize: 10, // maximum file size to inline (in kilobytes)
        fallback: 'copy', // fallback method to use if max size is exceeded
      }),
    ],
  }),
  url(),
  svgr(),
  image(),
  json(),
  production && terser(),
  !production && livereload({
    watch: 'dist',
  }),
];

export default {
  input: 'client/src/index.tsx',
  output: {
    dir: 'dist',
    format: 'iife',
    name: 'bundle',
    sourcemap: true,
  },
  plugins: getPlugins()
}