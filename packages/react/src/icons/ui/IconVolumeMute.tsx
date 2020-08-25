/* eslint-disable import/prefer-default-export */
import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconVolumeMute({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          fill="currentColor"
          d="M15 2.5v19L9.273 17H6a5 5 0 01-.14-9.998L9.273 7 15 2.5zm-2 4.311l-3 2.115v6.147l3 2.115V6.811zM22.5 8.5L24 10l-2 2 2 2-1.5 1.5-2-2-2 2L17 14l2-2-2-2 1.5-1.5 2 2 2-2zM8 9H6.027L5.915 9a3 3 0 00-.027 5.997L6 15h2V9z"
        />
      </g>
    </svg>
  );
}
