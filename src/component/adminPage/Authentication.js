import { useState } from "react";
import data from "./data.json";

export default function Authentication({ setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const pageauth = document.getElementsByClassName("authform");
  function wrongData() {
    setUsername("");
    setPassword("");
    pageauth[0]?.classList.add("invalid");
    setInterval((e) => {
      pageauth[0]?.classList.remove("invalid");
    }, 1200);
  }
  function checkValidate(e) {
    e.preventDefault();
    username === data.loginInfo[1].user &&
    password === data.loginInfo[1].password
      ? setIsLogin(true)
      : wrongData();
  }
  return (
    <section className="authentication">
      <div className="inputs">
        <form action="" className="authform">
          <label htmlFor="username">UserName : </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">password : </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={(e) => checkValidate(e)}>Submit</button>
        </form>
      </div>
    </section>
  );
}
