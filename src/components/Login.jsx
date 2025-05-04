import React, { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="hero w-full bg-base-200 min-h-96">
      <div className="flex-col w-full ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provide your credentials</p>
        </div>
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl mx-auto">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
