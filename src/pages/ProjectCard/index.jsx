import React from 'react';
import PropTypes from 'prop-types';
import styles from './project-card.module.css';

export default function ProjectCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(images/${image})`,
        }}
      />
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
