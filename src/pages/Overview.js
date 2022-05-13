import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import styles from '../styles/overview.module.scss';

function Overview() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.sub_container}>
        <Sidebar />
        <h3>overview</h3>
      </div>
    </div>
  );
}

export default Overview;
