import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.

        <br />
        <br />

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit deleniti ipsum doloremque consequuntur rerum. Dicta iure molestiae dolorum pariatur esse incidunt voluptate beatae labore, minima maxime facilis molestias aspernatur.

        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit deleniti ipsum doloremque consequuntur rerum. Dicta iure molestiae dolorum pariatur esse incidunt voluptate beatae labore, minima maxime facilis molestias aspernatur.

        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit deleniti ipsum doloremque consequuntur rerum. Dicta iure molestiae dolorum pariatur esse incidunt voluptate beatae labore, minima maxime facilis molestias aspernatur.

        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit deleniti ipsum doloremque consequuntur rerum. Dicta iure molestiae dolorum pariatur esse incidunt voluptate beatae labore, minima maxime facilis molestias aspernatur.

      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;