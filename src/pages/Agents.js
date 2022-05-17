import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import styles from '../styles/agents.module.scss';

function Agents() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.sub_container}>
        <Sidebar />
        <h3>Agents</h3>
      </div>
    </div>
  );
}

export default Agents;
