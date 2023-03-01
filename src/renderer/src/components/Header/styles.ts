/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 40px;
  position: relative;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.backgrounds.light};

  strong {
    font-size: 15px;
    font-family: sans-serif;
    font-weight: 400;

    letter-spacing: 2px;
    color: ${(props) => props.theme.colors.black};
  }
`

interface WindowActionsProps {
  position: 'left' | 'right'
  shouldShowIconsOnHover?: boolean
}

export const WindowActions = styled.div<WindowActionsProps>`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.position === 'left'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `};
  ${(props) =>
    props.shouldShowIconsOnHover &&
    css`
      &:hover svg {
        display: block;
      }
    `}
`

export const DefaultActionButton = styled.button`
  background: transparent;
  -webkit-app-region: no-drag;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.grey};

  & + button {
    margin-left: 12px;
  }
  &:hover svg {
    color: ${(props) => props.theme.colors.red};

    color: ${(props): string => props.theme.colors.red};
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
`
