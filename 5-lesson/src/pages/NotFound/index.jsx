import React from "react";

import ROUTES from "../../routes/routes";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

import styles from "./index.module.scss";

const NotFound = () => (
  <div className={styles.error}>
    The page was not found!
    <Link to={ROUTES.USERS}>
      <Button text="Go to users" />
    </Link>
  </div>
);

export default NotFound;
