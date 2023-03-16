import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import ROUTES from "../../routes/routes";

import Button from "../../components/Button";

import styles from "./index.module.scss";

const UserListPage = ({ users }) => (
  <>
    <h1>Users</h1>
    <div className={styles.users}>
      {users.map((user, index) => (
        <div key={index} className={styles.user}>
          <img src={user.image} alt={user.alt} className={styles.userImage} />
          <h3>{user.name}</h3>
          <Link to={`${ROUTES.PROFILE}${user.id}`}>
            <Button text="Open Profile" />
          </Link>
        </div>
      ))}
    </div>
  </>
);

export default UserListPage;

UserListPage.propTypes = {
  users: PropTypes.array.isRequired,
};
