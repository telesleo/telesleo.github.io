import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List';
import styles from './project.module.css';

export default function Project() {
  const { projectId } = useParams();

  const [project, setProject] = useState();

  const getProject = async () => {
    const response = await fetch('/projects.json');
    const projects = await response.json();
    setProject(projects[projectId]);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div>
      {
        (project) && (
          <>
            <section>
              <h1>{project.title}</h1>
            </section>
            <section id={styles.content}>
              {
                project.content.map((contentPiece) => {
                  if (contentPiece.type === 'text') {
                    return (
                      <p
                        key={contentPiece.content}
                        className={styles.text}
                      >
                        {contentPiece.content}
                      </p>
                    );
                  } if (contentPiece.type === 'image') {
                    return (
                      <img
                        key={contentPiece.content}
                        className={styles.image}
                        src={`/images/${contentPiece.content}`}
                        alt={project.description}
                      />
                    );
                  }
                  return null;
                })
              }
            </section>
            <hr />
            <section>
              <h2>Tecnologias usadas:</h2>
              <List
                elements={
                project['technologies-used']
              }
              />
            </section>
            <hr />
            <section id={styles['webpage-github']}>
              <div id={styles.webpage}>
                {
                  (project.webpage)
                  && (
                    <>
                      <h2>Teste o site:</h2>
                      <a href={project.webpage} target="_blank" rel="noreferrer">{project.webpage}</a>
                    </>
                  )
                }
              </div>
              <div id={styles.github}>
                <h2>Projeto no github:</h2>
                <div id={styles['github-links']}>
                  {
                    (project['github-urls'].map((url) => (
                      <a className={styles['github-link']} key={url} href={url} target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github icon" />
                        <p>{url}</p>
                      </a>
                    )))
                  }
                </div>
              </div>
            </section>
          </>
        )
      }
    </div>
  );
}
