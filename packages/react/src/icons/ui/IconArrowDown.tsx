/* eslint-disable import/prefer-default-export */
import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconArrowDown({ size = 's', className = '', style = {}, ...rest }: IconProps) {
  return (
    <svg
      className={classNames(styles.icon, styles[size], className)}
      style={style}
      viewBox="0 0 24 24"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M13 4v12.5l4-4 1.5 1.5-6.5 6.5L5.5 14 7 12.5l4 4V4z" />
      </g>
    </svg>
  );
}
