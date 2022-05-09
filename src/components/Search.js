import React from 'react';
import { MdSearch, MdClear } from 'react-icons/md';
import styles from '../styles/search.module.scss';

function Search() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={styles.search_wrapper}>
      <MdSearch />
      <input type="text" className={styles.input} placeholder="Search...." />
      <MdClear />
    </div>
  );
}

export default Search;
