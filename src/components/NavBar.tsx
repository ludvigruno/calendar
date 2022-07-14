import React from "react";
import { Layout, Row, Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const logout = () => {
    dispatch(AuthActionCreators.logout());
  };
  return (
    <Layout.Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <>
            <div style={{ marginInline: "5px" }}>{user.username}</div>
            <Menu.Item key={1}>
              {isAuth ? (
                <Link to={RouteNames.LOGIN} onClick={logout}>
                  Выйти
                </Link>
              ) : (
                <Link to={RouteNames.LOGIN}>Логин</Link>
              )}
            </Menu.Item>
          </>
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
