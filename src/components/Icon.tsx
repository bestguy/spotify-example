import React, { HTMLProps } from 'react';

interface IconProps extends HTMLProps<HTMLElement> {
  name: string;
}

/**
 * Component for displaying an icon from Bootstrap icon font.
 */
const Icon = ({ name, className = '', ...props }: IconProps) => (
  <i className={`bi-${name} ${className}`} {...props}></i>
);

export default Icon;
