import React from "react";

const styles = {
  nav: {
    fontSize: "1rem",
    padding: "1.5em 2.5em",
    backgroundColor: "lightgreen",
  },
  h1: {
    textTransform: "uppercase",
    fontSize: "1.3em",
    color: "white"
  },
  h2: {
    fontSize: "0.8em"
  }
};

const Nav = () => (
  <nav style={styles.nav}>
    <a href="">
      <h1 style={styles.h1}>Logo/Name goes here</h1>
    </a>
  </nav>
);

export default Nav;