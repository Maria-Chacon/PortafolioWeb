import React from "react";
import { useEffect, useRef, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import GitPor from "/public/git.jpg";
import Image from "next/image";

type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const fetchProjects = async () => {
    const response = await fetch(
      "https://api.github.com/users/Maria-Chacon/repos"
    );
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Container className="my-5" id="projects">
      <h2 className="text-center mb-5">Proyectos realizados</h2>
      <div className="overflow-auto mb-3 border rounded shadow p-3 ">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {projects.map((project) => (
            <Carousel.Item key={project.id} className={"itemP"} interval={4000}>
              <Image src={GitPor} alt="slide" />
              <Carousel.Caption className="caption">
                <h5 className="card-title mb-3">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Projects;
