import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form
        action="http://localhost:4000/login"
        method="post"
        style={{ display: "flex", flexDirection: "column", marginBottom: 10 }}
      >
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <button type="submit">Login</button>
      </form>
      <a href="http://localhost:4000/login/facebook" target="_self">
        Login with facebook
      </a>
      <a
        href="http://localhost:4000/login/google"
        target="_self"
        style={{ color: "orange" }}
      >
        Login with google
      </a>
      <p>
        New user,
        <Link to={"/register"}>Register here</Link>
      </p>
    </div>
  );
}

export default Login;
