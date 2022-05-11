import React from 'react';
import styles from '../styles/header.module.scss';
import Search from './Search';

const header = () => (
  <div className={styles.container}>
    <div className={styles.logo}>Bendanga</div>
    <div className={styles.searchbar}>
      <Search />
    </div>
  </div>
);

export default header;
