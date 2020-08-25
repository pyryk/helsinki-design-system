/* eslint-disable import/prefer-default-export */
import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconTwitch({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
        <path
          d="M19.071 3a1.93 1.93 0 011.923 1.778l.006.15v14.143a1.93 1.93 0 01-1.778 1.923l-.15.006H4.928a1.93 1.93 0 01-1.923-1.778L3 19.072V4.928a1.93 1.93 0 011.778-1.923L4.928 3h14.143zM19 5H8.708L6 7.708v9.75h3.25v2.709l2.708-2.709h2.167L19 12.583V5zm-1.083 1.083v5.959l-2.167 2.166h-2.167l-1.896 1.896v-1.896H9.25V6.083h8.667zM16.292 7.98h-1.084v3.25h1.084V7.98zm-2.98 0H12.23v3.25h1.084V7.98z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
