import React from 'react';
import styles from './main.module.css';

export default function Main() {
  return (
    <div>
      <section id={styles.about}>
        <div id={styles['about-picture-name']}>
          <img id={styles['profile-picture']} src="images/profile-picture.png" alt="Leo Teles" />
          <h1>Leo Teles</h1>
        </div>
        <div id={styles['about-description']}>
          <p>
            {`Olá, me chamo Leo, moro em São Bento do Sul, Santa Catarina, 
          sou fascinado por tecnologia e programação, 
          área que venho estudando há 4 anos. Hoje sou formado em Desenvolvimento Web pela Trybe. 
          Tenho conhecimentos tanto de Backend quando de Frontend, usando tecnologias como Javascript, 
          Typescript, React, Node, Express, Docker entre outras. 
          Na busca constante de melhorar minhas técnicas e aprender novas habilidades. 
          Atualmente estudando Cybersecurity e aprofundando o conhecimento em Python.`}
          </p>
        </div>
      </section>
    </div>
  );
}
