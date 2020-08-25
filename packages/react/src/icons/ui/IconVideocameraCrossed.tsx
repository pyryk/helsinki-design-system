/* eslint-disable import/prefer-default-export */
import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconVideocameraCrossed({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          d="M19.793 2.793l1.414 1.414-16.5 16.5-1.414-1.414 16.5-16.5zM23 6.613v10.774l-6.018-2.006a4 4 0 01-3.775 3.614L13 19H8.534l2-2H13a2 2 0 001.995-1.85L15 15v-2.466l4.882-4.882L23 6.612zM13 5c.71 0 1.377.185 1.955.51l-1.534 1.534a1.999 1.999 0 00-.278-.039L13 7H5a2 2 0 00-1.995 1.85L3 9v6c0 .671.33 1.265.838 1.628l-1.424 1.424a3.992 3.992 0 01-1.407-2.81L1 15V9a4 4 0 013.8-3.995L5 5h8zm8 4.387l-4 1.333v2.559l4 1.333V9.387zM6 9a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
