import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const footerWrapperCss = css`
  flex-direction: column;
  background-color: var(--color-grey);
`;

export const footerUpperWrapperCss = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2.5em 0;
  gap: 1rem;
  color: var(--color-black);
  ${mediaQuery.mobile} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const footerLowerWrapperCss = css`
  width: 100%;
  background-color: var(--color-dark-grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
  padding: 0.75em 0;
  font-size: 0.85rem;
  color: var(--color-black);
  text-align: center;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
  }
  .attribute-container {
    display: flex;
    gap: 0.2em;
    justify-content: center;
    align-items: center;
  }
  & a {
    font-weight: 600;
    color: black;
    text-decoration: none;
    min-height: unset;
    /* display: inline-flex; */
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${mediaQuery.mobile} {
    width: 100%;
    gap: 0em;
    & > * {
      flex-direction: column;
      height: 48px;
    }
    .attribute-container {
      height: 100%;
      * {
        height: 100%;
      }
    }
    .break {
      display: block;
      visibility: hidden;
      height: 0;
      width: 0;
    }
  }
`;

export const mainTopTextCss = css`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  grid-column: 1 / -1;
`;

export const mainNavWrapperCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
  grid-auto-flow: column;
  & > * {
    color: var(--color-xDark-grey);
    font-weight: 500;
    text-decoration: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  ${mediaQuery.mobile} {
    gap: 0;
    width: 100%;
    font-size: 0.85rem;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const socialsWrapperCss = css`
  color: var(--color-xDark-grey);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  & * {
    color: inherit;
  }
  .nav {
    display: grid;
    font-size: 2rem;
    grid-template-columns: repeat(2, 1em);
    gap: 0.2em;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: inherit;
    & * {
      font-size: inherit;
    }
  }
  ${mediaQuery.mobile} {
    justify-content: center;
    align-items: flex-start;
    a {
      font-size: 2.25rem;
    }
    .nav {
      grid-template-columns: repeat(4, 1em);
    }
  }
`;
