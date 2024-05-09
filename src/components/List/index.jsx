import React from 'react';
import PropTypes from 'prop-types';
import styles from './list.module.css';

export default function List({ elements }) {
  return (
    <div className={styles.list}>
      <ul>
        {
          elements.map((element) => <li key={element}>{element}</li>)
        }
      </ul>
    </div>
  );
}

List.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};
