import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import resolve  from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import run from '@rollup/plugin-run';
import typeScript from '@rollup/plugin-typescript';
import {terser} from "rollup-plugin-terser";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const getPlugins = () => [
    replace({
      'process.env.NODE_ENV': '"production"',
    }),
		resolve ({
      preferBuiltins: false,
      extensions: ['.js', '.ts']
    }),
    commonjs({
      include: /node_modules/,
    }),
    typeScript({
      tsconfig: 'server/tsconfig.json',
		}),
    json(),
		production && terser(),
    !production && run(),
];

export default {
    input: 'server/src/index.ts',
    output: {
				dir: 'dist/server',
				format: 'cjs',
				sourcemap: true
    },
    plugins: getPlugins()
}