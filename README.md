# style-ghost

**Experimental**

Babel plugin for transforming JSX attribute string literal to atomic CSS

```javascript
// Input
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
  "plugins": [
    "style9-ghost",
    "style9"
  ]
}
```

## Installation

```sh
yarn add -D git+https://github.com/johanholmerin/style9-ghost#semver:^0.1.0 style9
```
