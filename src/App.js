import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Guard } from "@authing/react-ui-components";
// 引入 css 文件
import "@authing/react-ui-components/lib/index.min.css";

function App() {
  const appId = "61f2a25b8b9c6b98d4aa75ce";
  const onLogin = (userInfo) => {
    console.log(userInfo);
  };
  return (
    <div className="App">
      <Guard appId={appId} onLogin={onLogin} />
    </div>
  );
}

export default App;
