import React from 'react';
import styles from '../styles/header.module.scss';

const header = () => (
  <div className={styles.container}>
    <div className={styles.logo}>Bendanga</div>
    <div className={styles.searchbar}>Login</div>
  </div>
);

export default header;
