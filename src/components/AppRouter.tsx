import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRotes, publicRotes, RouteNames } from "../router";

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return isAuth ? (
    <Routes>
      {privateRotes.map((route) => (
        <Route
          path={route.path}
          element={<route.element />}
          key={route.key}
        ></Route>
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.EVENT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRotes.map((route) => (
        <Route
          path={route.path}
          element={<route.element />}
          key={route.key}
        ></Route>
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
