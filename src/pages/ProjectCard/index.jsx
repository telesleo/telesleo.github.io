import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './project-card.module.css';

export default function ProjectCard({
  projectId, title, description, image,
}) {
  return (
    <Link className={styles['project-link']} to={`project/${projectId}`}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(images/${image})`,
          }}
        />
      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  projectId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
