import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import styles from '../styles/alertes.module.scss';

function Alertes() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.sub_container}>
        <Sidebar />
        <h3>Alertes</h3>
      </div>
    </div>
  );
}

export default Alertes;
