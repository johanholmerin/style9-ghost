# style9-ghost

Babel preset for transforming JSX attribute string literals to atomic CSS using
[style9](https://github.com/johanholmerin/style9),
[style9-jsx-prop](https://github.com/johanholmerin/style9-jsx-prop), and
[css-to-js.macro](https://github.com/johanholmerin/css-to-js.macro).

```javascript
// Input
import { css } from 'css-to-js.macro';

<div
  css={css`
    color: red;
    font-size: ${props.fontSize};
    ${props.isBlue && css`
      color: blue;
    `}
  `}
/>

// Output
<div
  className={(props.isBlue ? "c1r9f2e5 " : "cyyg6ey ") + "cg0eup6 "},
  style={{ "--c3520804954": props.fontSize }},
/>

```
```css
/* CSS output */
.c1r9f2e5 {
  color: blue;
}
.cyyg6ey {
  color: red;
}
.cg0eup6 {
  font-size: var(--c3520804954);
}
```

## Usage

```javascript
// babel config
{
  "presets": [
    "style9-ghost"
  ]
}
```

## Installation

```sh
yarn add -D git+https://github.com/johanholmerin/style9-ghost#semver:^0.2.0
```
