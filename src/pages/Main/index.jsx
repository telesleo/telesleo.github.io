import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import ProjectCard from '../ProjectCard';
import styles from './main.module.css';

export default function Main() {
  const [projects, setProjects] = useState([]);

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
      <section id={styles.about}>
        <div id={styles['about-picture-name']}>
          <img id={styles['profile-picture']} src="images/profile-picture.png" alt="Leo Teles" />
          <div id={styles['name-role']}>
            <h2>Leo Teles</h2>
            <p>Desenvolvedor Web - Full Stack</p>
          </div>
        </div>
        <div id={styles['about-description']}>
          <p>
            {`Olá, me chamo Leo, moro em São Bento do Sul, Santa Catarina, 
          sou fascinado por tecnologia e programação, 
          área que venho estudando há 4 anos. Hoje sou formado em Desenvolvimento Web pela Trybe. 
          Tenho conhecimentos tanto de Backend quando de Frontend, usando tecnologias como Javascript, 
          Typescript, React, Node, Express, Docker entre outras.`}
          </p>
        </div>
      </section>
      <section>
        <h1>Habilidades</h1>
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
        <h1>Projetos</h1>
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
    </div>
  );
}
