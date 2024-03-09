import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInModal.css";

const LogInModal = ({ setToken, token }) => {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const login = async () => {
    const res = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", JSON.stringify(data?.accessToken));
      setToken(data?.accessToken);
      navigate("/admin");
    }
  };

  return (
    <>
      <div className="admin-login">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          value={body.email}
        ></input>

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setBody({ ...body, password: e.target.value })}
        ></input>
      <button onClick={login}>Login</button>
      </div>
    </>
  );
};

export default LogInModal;
