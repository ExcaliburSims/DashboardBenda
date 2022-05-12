import React from 'react';
import {
  MdPerson, MdOutlineVisibility, MdOutlinePeopleAlt, MdBuild, MdLeaderboard,
} from 'react-icons/md';
import styles from '../styles/sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdOutlineVisibility className={styles.icon} />
        <h5>overview</h5>
      </div>
      <div className={styles.search}>
        <MdPerson className={styles.icon} />
        <h5>users</h5>
      </div>
      <div className={styles.search}>
        <MdOutlinePeopleAlt className={styles.icon} />
        <h5>Agents</h5>
      </div>
      <div className={styles.search}>
        <MdBuild className={styles.icon} />
        <h5>Garages</h5>
      </div>
      <div className={styles.search}>
        <MdLeaderboard className={styles.icon} />
        <h5>statistiques</h5>
      </div>
    </div>
  );
}

export default Sidebar;
