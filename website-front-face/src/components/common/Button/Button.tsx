import React, { MouseEvent, ReactNode } from 'react';
import { CommonButton } from './Button.styles';

export interface Props {
  children: ReactNode;
  danger?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  block?: boolean;
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  width?: string;
  height?: string;
  size?: 'large' | 'middle' | 'small';
  icon?: ReactNode;
}
const Button: React.FC<Props> = (props) => {
  const { children, danger, htmlType, block, type, icon, width, size, height } =
    props;
  return (
    <CommonButton
      htmlType={htmlType}
      danger={danger}
      block={block}
      type={type}
      icon={icon}
      width={width}
      size={size}
      height={height}
      {...props}
    >
      {children}
    </CommonButton>
  );
};

export default Button;
