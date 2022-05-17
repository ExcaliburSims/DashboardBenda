import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import styles from '../styles/cartes.module.scss';

function Cartes() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.sub_container}>
        <Sidebar />
        <h3>Cartes</h3>
      </div>
    </div>
  );
}

export default Cartes;
