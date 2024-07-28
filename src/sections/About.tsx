import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Hi, I’m a DevOps engineer passionate about creating efficient and scalable digital solutions. My journey in technology began with my first project, 
          containerizing, a MERN app developed using React and express.js in 2023..
          </p>
          <p className="about-grid-info-text">
          Currently, I specialize in streamlining processes and optimizing deployment efficiency. My expertise lies in automating workflows and building robust CI/CD pipelines to ensure seamless application delivery
            <Link href="https://jyothiram.hashnode.dev/" className="link" target="_blank">...
            </Link>
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my Blogs, where I demonstrate how to depoly, Scale and Implement the devops practices.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Golang</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Kubernetes</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">Bash</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Jenkins</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/jyothiram.webp" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
