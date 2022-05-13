import React from 'react';
import {
  // eslint-disable-next-line max-len
  MdPerson, MdOutlineVisibility, MdOutlinePeopleAlt, MdBuild, MdLeaderboard, MdNotificationImportant, MdGpsFixed,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import styles from '../styles/sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <ul>
        <NavLink to="/">
          <MdOutlineVisibility className={styles.icon} />
          <li>Overview</li>
        </NavLink>
        <NavLink to="/Users">
          <MdPerson className={styles.icon} />
          <li>Users</li>
        </NavLink>
        <NavLink to="/Agents">
          <MdOutlinePeopleAlt className={styles.icon} />
          <li>Agents</li>
        </NavLink>
        <NavLink to="/Garages">
          <MdBuild className={styles.icon} />
          <li>Garages</li>
        </NavLink>
        <NavLink to="/Alertes">
          <MdNotificationImportant className={styles.icon} />
          <li>Alertes</li>
        </NavLink>
        <NavLink to="/Cartes">
          <MdGpsFixed className={styles.icon} />
          <li>Cartes</li>
        </NavLink>
        <NavLink to="Stats">
          <MdLeaderboard className={styles.icon} />
          <li>Stats</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
