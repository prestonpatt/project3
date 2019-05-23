import React from "react";

const styles = {
  nav: {
    fontSize: 20,
    padding: "1.5em 2.5em",
    backgroundColor: " #19a974",
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
      <h1 style={styles.h1}>Worth it?</h1>
    </a>
  </nav>
);

export default Nav;