import React from 'react';
import {
  // eslint-disable-next-line max-len
  MdPerson, MdOutlineVisibility, MdOutlinePeopleAlt, MdBuild, MdLeaderboard, MdNotificationImportant, MdGpsFixed,
} from 'react-icons/md';
import styles from '../styles/sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdOutlineVisibility className={styles.icon} />
        <h5>Overview</h5>
      </div>
      <div className={styles.search}>
        <MdPerson className={styles.icon} />
        <h5>Users</h5>
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
        <MdNotificationImportant className={styles.icon} />
        <h5>Alertes</h5>
      </div>
      <div className={styles.search}>
        <MdGpsFixed className={styles.icon} />
        <h5>Cartes</h5>
      </div>
      <div className={styles.search}>
        <MdLeaderboard className={styles.icon} />
        <h5>Stats</h5>
      </div>
    </div>
  );
}

export default Sidebar;
