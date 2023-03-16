import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Button = ({ text }) => <button className={styles.button}>{text}</button>;

Button.defaultProps = {
  text: "Click me!",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
