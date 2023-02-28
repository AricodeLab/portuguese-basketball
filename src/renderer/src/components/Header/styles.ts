import { defaultThemeI } from '../../theme'
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
  border-bottom: 1px solid ${(props: defaultThemeI): unknown => props.theme.backgrounds.light};
  strong {
    font-size: 13px;
    font-weight: 400;
    color: ${(props: defaultThemeI): unknown => props.theme.colors.white};
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

export const DefaultActionButton = styled.button`
  background: transparent;
  -webkit-app-region: no-drag;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: defaultThemeI): unknown => props.theme.colors.grey};
  & + button {
    margin-left: 12px;
  }
  &:hover svg {
    color: ${(props: defaultThemeI): unknown => props.theme.colors.red};
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
`
