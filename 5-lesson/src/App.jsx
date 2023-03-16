import React from "react";

import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes/routes";

import UserListPage from "./pages/UserListPage";
import UserProfilePage from "./pages/UserProfilePage";
import NotFound from "./pages/NotFound";

import { users } from "./mockData";

const App = () => (
  <Routes>
    <Route path={ROUTES.USERS} element={<UserListPage users={users} />} />
    <Route
      path={`${ROUTES.PROFILE}:id`}
      element={<UserProfilePage users={users} />}
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
