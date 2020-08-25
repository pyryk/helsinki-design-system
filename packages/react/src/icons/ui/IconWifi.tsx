/* eslint-disable import/prefer-default-export */
import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconWifi({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          d="M12 17.534a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4.14-2.011l.112.109-1.415 1.414c-1.628-1.629-4.166-1.717-5.727-.253l-.087.085-1.414-1.414c2.312-2.313 6.1-2.26 8.531.059zm3.126-3.152l.124.122-1.414 1.415c-3.248-3.248-8.495-3.281-11.796-.102l-.116.113-1.414-1.414c4.032-4.032 10.54-4.079 14.616-.134zm3.087-3.188l.175.172-1.414 1.414C16.138 5.794 8.103 5.744 3.066 10.62l-.152.15L1.5 9.354c5.749-5.749 15.033-5.806 20.853-.172z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
