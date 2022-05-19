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
        <div className={styles.box_content}>
          <h3>Overview</h3>
        </div>
      </div>
    </div>
  );
}

export default Overview;
