import React from 'react';
import { MdAddAlert } from 'react-icons/md';
import styles from '../styles/header.module.scss';
import Search from './Search';

const header = () => (
  <div className={styles.container}>
    <div className={styles.logo}>Bendanga</div>
    <div className={styles.search}>
      <Search />
      <MdAddAlert className={styles.icon} />
    </div>
  </div>
);

export default header;
