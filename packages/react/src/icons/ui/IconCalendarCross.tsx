/* eslint-disable import/prefer-default-export */
import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconCalendarCross({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          d="M17 2a1 1 0 011 1v1h4v9h-2v-2H4v8h9.5v2H2V4h4V3a1 1 0 112 0v1h8V3a1 1 0 011-1zm3 4H4v3h16V6zm2.536 10.414l-2.122 2.122 2.122 2.12-1.415 1.415L19 19.95l-2.121 2.121-1.415-1.414 2.122-2.121-2.122-2.122L16.88 15 19 17.121 21.121 15l1.415 1.414z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
