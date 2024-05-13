import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List';
import ProjectCard from '../ProjectCard';
import styles from './main.module.css';
import getLanguage from '../../utils/localization';

export default function Main() {
  const [projects, setProjects] = useState([]);
  const { language } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const pageLanguage = language || getLanguage(navigator) || 'en';
      const response = await fetch(`/main.${pageLanguage}.json`);
      const pageData = await response.json();
      setData(pageData);
    };
    getData();
  }, [language]);

  const getProjects = async () => {
    const response = await fetch('/projects.json');
    const json = await response.json();
    setProjects(Object.entries(json)
      .map(([projectKey, projectValue]) => ({ id: projectKey, ...projectValue })));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div id={styles.main}>
      {
        (data) && (
          <>
            <section id={styles.about}>
              <div id={styles['about-picture-name']}>
                <img id={styles['profile-picture']} src="images/profile-picture.png" alt="Leo Teles" />
                <div id={styles['name-role']}>
                  <h2>Leo Teles</h2>
                  <p>{ data.role }</p>
                </div>
              </div>
              <div id={styles['about-description']}>
                <p>
                  { data.about }
                </p>
              </div>
            </section>
            <section>
              <h1>{ data['skills-title'] }</h1>
              <List
                elements={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Node.js',
                  'Express',
                  'MySQL',
                  'Sequelize',
                ]}
              />
            </section>
            <hr />
            <section>
              <h1>{ data['projects-title'] }</h1>
              <div id={styles['project-list']}>
                {
              projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  projectId={project.id}
                  title={project.title}
                  description={project.description}
                  image={project['cover-image']}
                />
              ))
            }
              </div>
            </section>
          </>
        )
      }
    </div>
  );
}
