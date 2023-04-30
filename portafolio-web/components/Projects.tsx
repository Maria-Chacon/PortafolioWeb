import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Carousel, Container } from "react-bootstrap";

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
        <Carousel  activeIndex={index} onSelect={handleSelect}>
          {projects.map((project) => (
            <Carousel.Item key={project.id} className={"itemP"} interval={4000}>
              <img
                src={
                  "https://marketing4ecommerce.net/wp-content/uploads/2018/06/GitHub-logo-2-imagen.jpg"
                }
                alt="slide"
              />
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
