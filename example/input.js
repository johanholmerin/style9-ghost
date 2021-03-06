import { css } from 'css-to-js.macro';

export default function Component(props) {
  return (
    <div
      css={css`
        font-size: ${props.fontSize};
        ${props.isBlue ? css`color: blue;` : css`color: red;`}
        @media (max-width: 800px) {
          color: orange;
          ${props.isPurple && css`color: purple;`}
        }
        ${props.visible ? css`opacity: 1;` : css`opacity: 0;`}
        margin-top: 12px;
        :hover {
          text-decoration: underline;
        }
      `}
    >
      Hello world
    </div>
  );
}
