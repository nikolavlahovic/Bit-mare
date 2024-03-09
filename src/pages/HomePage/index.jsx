import React from "react";
import "./HomePage.css";
import Main from "../../components/Main";
function App({ token }) {
  return (
    <div className="HomePage">
      <Main token={token} />
    </div>
  );
}

export default App;
