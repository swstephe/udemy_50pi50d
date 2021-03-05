import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import virtual from '@rollup/plugin-virtual'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-css-only'

const production = !process.env.ROLLUP_WATCH
const dir = production ? 'dist' : 'public'

const buildthese = [
  'day01',
  'day02',
  'day03',
  'day04',
  'day05',
  'day06',
  'day07',
  'day08',
  'day09',
  'day10',
  'day11',
  'day12',
  'day13',
  'day14',
  'day15',
  'day16',
  'day17',
  'day18',
  'day19',
  'day20',
  'day21',
  'day22',
  'day23',
  'day24',
  'day25',
  'day26',
  'day27',
  'day28',
  'day29',
  'day30',
  'day31',
  'day32',
  'day33',
  'day34',
  'day35',
  'day36',
  'day37',
  'day38',
  'day39',
  'day40',
  'day41',
  'day42',
  'day43',
  'day44',
  'day45',
  'day46',
  'day47',
  'day48',
  'day49',
  'day50',
]

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      )
      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    },
  }
}

const COMMON = function (page) {
  return {
    input: 'entry', // production ? `src/main.js` : `src/debug.js`,
    output: {
      sourcemap: !production,
      format: 'iife',
      name: 'app',
      file: `${dir}/${page}/bundle.js`,
    },
    plugins: [
      virtual({
        entry: `
        import App from './src/${page}/App.svelte'

        const app = new App({
        target: document.body,
        })
        export default app
        `,
      }),
      json(),
      copy({
        targets: [
          { src: `src/${page}/index.html`, dest: `${dir}/${page}` },
          { src: `src/${page}/global.css`, dest: `${dir}/${page}` },
        ],
      }),
      svelte({
        compilerOptions: {
          dev: !production,
        },
      }),
      css({ output: 'bundle.css' }),
      resolve({ browser: true, dedupe: ['svelte'] }),
      commonjs(),
      // !production && serve(),
      // !production && livereload(dir),
      production && terser({ compress: true, mangle: true }),
    ],
    watch: {
      clearScreen: true,
    },
  }
}

const exp = (function () {
  const ret = []
  buildthese.forEach(folder => ret.push(COMMON(folder)))
  return ret
})()

export default exp
