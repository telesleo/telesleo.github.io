import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <section>
              {
                project.content.map((contentPiece) => {
                  if (contentPiece.type === 'text') {
                    return <p key={contentPiece.content}>{contentPiece.content}</p>;
                  } if (contentPiece.type === 'image') {
                    return (
                      <img
                        key={contentPiece.content}
                        src={`/images/${contentPiece.content}`}
                        alt={project.description}
                      />
                    );
                  }
                  return null;
                })
              }
            </section>
            <section>
              <h1>Tecnologias usadas:</h1>
              <ul>
                {
                  (project['technologies-used'].map((technology) => <li key={technology}>{technology}</li>))
                }
              </ul>
            </section>
            <section>
              <h1>Projeto no github:</h1>
              {
                (project['github-urls'].map((url) => <a key={url} href={url}>{url}</a>))
              }
            </section>
          </>
        )
      }
    </div>
  );
}
