import React from 'react';
import PropTypes from 'prop-types';
import styles from './list.module.css';

export default function List({ title, elements }) {
  return (
    <div className={styles.list}>
      <h1>{ title }</h1>
      <ul>
        {
          elements.map((element) => <li key={element}>{element}</li>)
        }
      </ul>
    </div>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};
