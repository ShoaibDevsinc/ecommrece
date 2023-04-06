import React, { useContext } from "react";
import { global_context } from "./create_context";
import { login } from "./fetch_apis";

export default function Login() {
  const { email, setEmail, pass, setPass, loginStatus, setLoginStatus } =
    useContext(global_context);
  // login(email, pass,);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, pass, setLoginStatus);
  };

  return (
    <div>
      <div className="form container d-flex align-items-center justify-content-center ">
        <form>
          <div className="  m-2 p-3">
            <label className="for-html">Username: </label>
            <input
              className="form-control"
              type="text"
              name="uname"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className=" m-2 p-3">
            <label className="">Password </label>
            <input
              className="form-control"
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              required
            />
          </div>
          <div className="d-flex justify-content-center ">
            <input class="btn btn-dark" type="submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
