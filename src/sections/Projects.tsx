import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "2048-Game-AWS-EKS",
      projectLink: "https://github.com/jyothiram266/devops-projects/tree/master/Deployment-of-2048-Game-on-EKS-Cluster",
      projectDescription:
        "Provisioned an Amazon EKS cluster for scaling and managing application pods, deployed the 2048 game using Kubernetes manifests and Helm charts, and configured AWS ALB for traffic distribution and high availability.",
      projectTech: [
        "AWS-EKS",
        "Kubernetes",
        "Helm",
      ],
      projectExternalLinks: {
        github: "https://github.com/jyothiram266/devops-projects/tree/master/Deployment-of-2048-Game-on-EKS-Cluster",
        externalLink: "https://github.com/jyothiram266/devops-projects/tree/master/Deployment-of-2048-Game-on-EKS-Cluster",
      },
    },
    {
      image: "/project2.png",
      projectName: "CI/CD using Jenkins and Terraform",
      projectLink: "https://github.com/jyothiram266/devops-projects/tree/master/Deploy-to-Kubernetes-Using-Jenkins",
      projectDescription:
        " Integrated Jenkins with Terraform and Kubernetes to automate EKS cluster creation and Nginx deployment, streamlining continuous integration and delivery workflows.",
      projectTech: [
        "AWS-EKS",
        "Jenkins",
        "Terraform",
        "SonarQube",
        "Docker",
        "Kubernetes",
      ],
      projectExternalLinks: {
        github: "https://github.com/jyothiram266/devops-projects/tree/master/Deploy-to-Kubernetes-Using-Jenkins",
        externalLink: "https://github.com/jyothiram266/devops-projects/tree/master/Deploy-to-Kubernetes-Using-Jenkins",
      },
    },
    {
      image: "/project3.png",
      projectName: "Real-Time DevSecOps Pipeline",
      projectLink: "https://github.com/jyothiram266/devops-projects/tree/master/Real-Time-DevSecOps-Pipeline",
      projectDescription:
        "Set up an Ubuntu EC2 instance with Jenkins, Docker, Trivy, and SonarQube, and integrated Jenkins with JDK and security plugins for a comprehensive CI/CD pipeline.enhancing deployment efficiency and ensuring end-to-end process verification.",
      projectTech: [
        "Jenkins",
        "Trivy",
        "Kubernetes",
        "Docker",
        "Oswasp",
        "SonarQube",
      ],
      projectExternalLinks: {
        github: "https://github.com/jyothiram266/devops-projects/tree/master/Real-Time-DevSecOps-Pipeline",
        externalLink: "https://github.com/jyothiram266/devops-projects/tree/master/Real-Time-DevSecOps-Pipeline",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
