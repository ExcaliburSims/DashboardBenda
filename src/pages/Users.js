import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import styles from '../styles/users.module.scss';

function Users() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.sub_container}>
        <Sidebar />
        <h3>Users</h3>
      </div>
    </div>
  );
}

export default Users;
