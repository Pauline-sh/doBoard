import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import resolve  from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import run from '@rollup/plugin-run';
import typeScript from '@rollup/plugin-typescript';
// import builtins from 'rollup-plugin-node-builtins';
// import globals from 'rollup-plugin-node-globals';s
import {terser} from "rollup-plugin-terser";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const getPlugins = () => [
		resolve ({ preferBuiltins: false }),
    commonjs({ extensions: ['.js', '.ts'] }),
		// globals(),
		// builtins(),
    replace({
      'process.env.NODE_ENV': '"production"',
    }),
    typeScript({
        tsconfig: 'tsconfig.json',
		}),
    json(),
		production && terser(),
    !production && run()
];

export default {
    input: './src/index.ts',
    output: {
				dir: './../dist/server',
				format: 'cjs',
				sourcemap: true
    },
    plugins: getPlugins()
}