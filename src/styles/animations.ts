import { css } from "styled-components";

const animations = css`
  @keyframes move-shine {
    0% {
      transform: translate(-30%) rotateZ(-45deg);
    }

    100% {
      transform: translate(100%, 300%) rotateZ(-45deg);
    }
  }
`;

export default animations;
