import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import ProjectCard from '../ProjectCard';

export default function Main() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const response = await fetch('/projects.json');
    const json = await response.json();
    setProjects(Object.values(json));
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
            <h1>Leo Teles</h1>
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
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
      </section>
      <section>
        <h1>Projects</h1>
        <div>
          {
            projects.map((project) => (
              <ProjectCard
                key={project.title}
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
