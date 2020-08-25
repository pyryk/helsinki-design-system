/* eslint-disable import/prefer-default-export */
import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconStarFill({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          d="M5.202 22.231l.217-1.728.737-5.847-3.973-4.278L1 9.115l1.69-.331 5.712-1.079 2.777-5.173L12 1l.821 1.532 2.777 5.173 5.712 1.079 1.69.33-1.183 1.264-3.985 4.29.737 5.835.229 1.728-1.558-.748L12 18.971l-5.24 2.512-1.558.748z"
        />
      </g>
    </svg>
  );
}
