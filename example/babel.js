const fs = require('fs');
const babel = require('@babel/core');
const path = require('path');
const plugin = require('../index.js');
const style9Plugin = require('style9/babel');
const style9processCSS = require('style9/src/process-css');
const prettier = require('prettier');
const { minify } = require('terser');

const output = babel.transformFileSync(path.resolve(__dirname, './input.js'), {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
      },
    ],
    plugin,
    style9Plugin,
  ],
});
minify(output.code).then(({ code }) => {
  fs.writeFileSync(
    path.resolve(__dirname, './output.js'),
    prettier
      .format(code, { parser: 'babel' })
      // Not needed for this example
      .replace('import _style from "style9";', '')
  );
  const { css } = style9processCSS(output.metadata.style9 || '');
  fs.writeFileSync(
    path.resolve(__dirname, './output.css'),
    prettier.format(css, { parser: 'css' })
  );
});
