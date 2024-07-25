import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "./ProjectCard";

test("renders the ProjectCard component with all elements", () => {
  const project = {
    title: "My Project",
    image: "http://example.com/image.jpg",
    githubLink: "http://github.com/example",
    demoLink: "http://demo.com/example",
    description: "This is a project description.",
    badgeText: "New"
  };

  render(
    <ProjectCard
      title={project.title}
      image={project.image}
      githubLink={project.githubLink}
      demoLink={project.demoLink}
      description={project.description}
      badgeText={project.badgeText}
    />
  );

  // Vérifie que le titre est affiché
  expect(screen.getByText(project.title)).toBeInTheDocument();

  // Vérifie que les liens GitHub et Démo sont présents et corrects
  const githubLink = screen.getByRole('link', { name: /GitHub/i });
  expect(githubLink).toHaveAttribute('href', project.githubLink);

  const demoLink = screen.getByRole('link', { name: /Démo/i });
  expect(demoLink).toHaveAttribute('href', project.demoLink);

  // Vérifie que la description est cachée par défaut en testant son style
  const description = screen.getByText("This is a project description.");
  expect(description).not.toBeVisible(); // Initialement cachée

  // Simule le survol
  fireEvent.mouseEnter(screen.getByText(project.title));
  expect(description).toBeVisible(); // Devient visible au survol
});

test("renders badge text if provided", () => {
  const projectWithBadge = {
    title: "Project with Badge",
    image: "http://example.com/image.jpg",
    githubLink: "http://github.com/example",
    demoLink: "http://demo.com/example",
    description: "Description with badge.",
    badgeText: "Featured"
  };

  render(
    <ProjectCard
      title={projectWithBadge.title}
      image={projectWithBadge.image}
      githubLink={projectWithBadge.githubLink}
      demoLink={projectWithBadge.demoLink}
      description={projectWithBadge.description}
      badgeText={projectWithBadge.badgeText}
    />
  );

  // Vérifie que le texte du badge est affiché
  expect(screen.getByText(projectWithBadge.badgeText)).toBeInTheDocument();
});

test("does not render badge text if not provided", () => {
  const projectWithoutBadge = {
    title: "Project without Badge",
    image: "http://example.com/image.jpg",
    githubLink: "http://github.com/example",
    demoLink: "http://demo.com/example",
    description: "Description without badge.",
    badgeText: ""
  };

  render(
    <ProjectCard
      title={projectWithoutBadge.title}
      image={projectWithoutBadge.image}
      githubLink={projectWithoutBadge.githubLink}
      demoLink={projectWithoutBadge.demoLink}
      description={projectWithoutBadge.description}
      badgeText={projectWithoutBadge.badgeText}
    />
  );

  // Vérifie que le texte du badge n'est pas affiché
  expect(screen.queryByText(/Featured/i)).not.toBeInTheDocument();
});
