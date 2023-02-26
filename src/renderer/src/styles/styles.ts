import styled, { css } from 'styled-components'

import { defaultTheme } from './theme'

export const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
`

export const CurrentConnection = styled.div`
  display: flex;
  flex: 1;
`

export const Container = styled.header`
  width: 100%;
  height: 40px;
  position: relative;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid
    ${(props: { theme: { backgrounds: { lightest: unknown } } }): unknown =>
      props.theme.backgrounds.lightest};
  strong {
    font-size: 13px;
    font-weight: 400;
    color: ${(props: { theme: { colors: { grey: unknown } } }): unknown => props.theme.colors.grey};
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
  ${(props: { position: string }): unknown =>
    props.position === 'left'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `};
  ${(props: { shouldShowIconsOnHover: string }): unknown =>
    props.shouldShowIconsOnHover &&
    css`
      &:hover svg {
        display: block;
      }
    `}
`

interface MacActionButtonProps {
  color: 'close' | 'minimize' | 'maximize'
}

const colors = {
  close: defaultTheme.colors.red,
  minimize: defaultTheme.colors.yellow,
  maximize: defaultTheme.colors.green
}

export const MacActionButton = styled.button<MacActionButtonProps>`
  background: ${(props: { color: string }): unknown => colors[props.color]};
  -webkit-app-region: no-drag;
  border: 0;
  width: 12px;
  height: 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & + button {
    margin-left: 8px;
  }
  svg {
    width: 8px;
    height: 8px;
    opacity: 0.9;
    display: none;
  }
  &:hover svg {
    display: block;
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
`

export const DefaultActionButton = styled.button`
  background: transparent;
  -webkit-app-region: no-drag;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: { theme: { colors: { grey: unknown } } }): unknown => props.theme.colors.grey};
  & + button {
    margin-left: 12px;
  }
  &:hover svg {
    color: ${(props: { theme: { colors: { white: unknown } } }): unknown =>
      props.theme.colors.white};
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
`
