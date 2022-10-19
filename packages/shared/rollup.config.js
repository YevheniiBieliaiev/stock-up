import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');
const outDir = 'build';
const resolvedFolders = [
  'common',
  'validation'
];

const main = 'index.cjs.js';
const module = 'index.esm.js';
const types = 'index.d.ts';

export default [{
  input: packageJson.main,
  output: [{
    file: `${outDir}/${main}`,
    format: 'cjs'
  }, {
    file: `${outDir}/${module}`,
    format: 'esm'
  }],
  plugins: [
    del({targets: [outDir]}),
    nodeResolve(),
    commonjs(),
    typescript({tsconfig: './tsconfig.json'}),
    terser({compress:{
      passes: 2,
      properties: false
    }}),
    generatePackageJson({
      outputFolder: outDir,
      baseContents: {
        ...packageJson,
        main,
        module,
        types,
        scripts: undefined
      }
    })
  ]
},
{
  input: `${outDir}/${types}`,
  output: [{
    file: `${outDir}/${types}`,
    format: 'esm'
  }],
  plugins: [
    dts(),
    del({
      targets: resolvedFolders.map((folder) => `${outDir}/${folder}`),
      hook: 'buildEnd',
    }),
  ],
},
]
