/* eslint-disable import/prefer-default-export */
import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconDownloadCloud({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          d="M13 9v10.876l2.182-2.18 1.06 1.061L12 23l-4.243-4.243 1.061-1.06L11 19.878V9h2zm-1.5-8c2.557 0 4.867 1.552 5.736 3.93l.047.136.132.021c2.63.448 4.517 2.532 4.583 5.263l.002.15c0 3.141-2.2 5.427-5.3 5.498L15.5 16v-2h1.05c2.066 0 3.45-1.406 3.45-3.5 0-1.962-1.398-3.381-3.4-3.495L16.471 7l-.795-.023-.157-.78C15.14 4.296 13.434 3 11.5 3 9.263 3 7.622 4.559 7.507 6.75l-.005.13-.014 1.112-1.157.01C4.84 8.043 3.6 9.452 3.6 11.1a2.9 2.9 0 002.789 2.898L6.5 14h2v2h-2a4.9 4.9 0 01-4.9-4.9c0-2.41 1.652-4.535 3.895-5.004l.07-.014.022-.145c.468-2.84 2.777-4.867 5.758-4.935L11.5 1z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
