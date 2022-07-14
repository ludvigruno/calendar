import React, { useEffect } from "react";
import { Layout } from "antd";
import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

function App() {
  const { setUser, setAuth } = useActions();
  useEffect(() => {
    //с реальным сервером тут можно отправлять токен на проверку
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username") } as IUser);
      setAuth(true);
    }
  }, []);

  return (
    <div className="App">
      <Layout>
        <NavBar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
        <Layout.Footer></Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
