import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo(props) {
  const { style } = props;
  return (
    <Link to="/" className={styles.logoStyle} style={style}>
      网约车司机平台
    </Link>
  );
}
