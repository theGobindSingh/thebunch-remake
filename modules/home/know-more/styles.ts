import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const knowMoreOuterWrapperCss = css`
  background-color: var(--color-primary-neutral);
`;

export const knowMoreWrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 2.5% 0;
  color: var(--color-primary-highlight);
  & > * {
    max-width: 50vw;
  }
  .heading {
    font-weight: 600;
  }
  .para {
    font-weight: 400;
  }
  .link {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid currentColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ${mediaQuery.mobile} {
    padding: 10% 0;
    & > * {
      max-width: unset;
    }
    .para {
      text-align: left;
    }
    .link {
      border-bottom: 0;
      border: 1px solid currentColor;
      padding: 0 2em;
      border-radius: 3rem;
    }
  }
`;
