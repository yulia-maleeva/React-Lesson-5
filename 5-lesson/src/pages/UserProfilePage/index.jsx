import React from "react";
import PropTypes from "prop-types";

import { useParams, Link } from "react-router-dom";
import ROUTES from "../../routes/routes";

import NotFound from "../NotFound";
import Button from "../../components/Button";

import styles from "./index.module.scss";

const UserProfilePage = ({ users }) => {
  const { id } = useParams();
  const user = users.filter((user) => id === user.id)[0];

  if (!user) {
    return <NotFound />;
  } else {
    return (
      <div className={styles.userProfile}>
        <img src={user.image} alt={user.alt}></img>
        <div className={styles.infoContainer}>
          <h2>{user.name}</h2>
          <p>{user.description}</p>
          <Link to={ROUTES.USERS}>
            <Button text="Back" />
          </Link>
        </div>
      </div>
    );
  }
};

UserProfilePage.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserProfilePage;
