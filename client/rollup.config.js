import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import image from '@rollup/plugin-image';
import resolve  from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typeScript from '@rollup/plugin-typescript';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
// import serve from 'rollup-plugin-serve';
import {terser} from "rollup-plugin-terser";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const getPlugins = () => [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
		image(),
    postcss({
      extensions: ['.css']
    }),
    typeScript({
        tsconfig: 'tsconfig.json',
    }),
    json(),
    replace({
      'process.env.NODE_ENV': '"production"',
    }),
    production && terser(),
    /*!production && serve({
      open: true,
      contentBase: ['../dist']
    }),*/
    !production && livereload({
      watch: '../dist'
    }),
];

export default {
    input: './src/index.ts',
    output: {
        dir: './../dist',
        format: 'iife',
        name: 'bundle',
				sourcemap: true
    },
    plugins: getPlugins()
}