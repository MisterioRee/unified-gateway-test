import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { WHITE, GREEN, DARK_GREEN } from 'constants/index';
import { Props } from './Button';

const PrimaryStyles = css`
  color: ${WHITE};
  background-color: ${GREEN};
  border-color: ${GREEN};
  font-weight: 700;
`;

const LinkStyles = css`
  color: ${GREEN};
`;

const DefaultStyles = css`
  color: ${GREEN};
`;

const PrimaryEffects = css`
  &.ant-btn:hover,
  &.ant-btn:active,
  &.ant-btn:focus {
    color: ${WHITE};
    background-color: ${DARK_GREEN};
    border-color: ${DARK_GREEN};
  }
`;

const LinkEffects = css`
  &.ant-btn:hover,
  &.ant-btn:active,
  &.ant-btn:focus {
    color: ${DARK_GREEN};
  }
`;

const DefaultEffects = css`
  &.ant-btn:hover,
  &.ant-btn:active,
  &.ant-btn:focus {
    color: ${GREEN};
    border-color: ${GREEN};
  }
`;

export const CommonButton = styled(Button)`
  // Static Styles
  &.ant-btn {
    // Common Styles
    border-radius: 3px;
    height: ${({ height }: Props) => `${height}px`};
    width: ${({ width, block }: Props) =>
      !block && (width ? `${width}%` : '10%')};
    // Dynamic Styles
    ${({ type, danger }) => type === 'primary' && !danger && PrimaryStyles}
    ${({ type, danger }) => type === 'link' && !danger && LinkStyles}
    ${({ type, danger }) => type === undefined && !danger && DefaultStyles}
  }

  // EFFECTS
  ${({ type, danger }) => type === 'primary' && !danger && PrimaryEffects}

  ${({ type, danger }) => type === 'link' && !danger && LinkEffects}

  ${({ type, danger }) => type === undefined && !danger && DefaultEffects}
`;
