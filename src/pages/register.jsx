import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form
        action="http://localhost:4000/register"
        method="post"
        style={{ display: "flex", flexDirection: "column", marginBottom: 10 }}
      >
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <button type="submit">Register</button>
      </form>
      <a href="http://localhost:4000/login/facebook" target="_self">
        Signup with facebook
      </a>
      <a
        href="http://localhost:4000/login/google"
        target="_self"
        style={{ color: "orange" }}
      >
        Signup with google
      </a>
      <p>
        Already Registered,
        <Link to={"/login"}>Login here</Link>
      </p>
    </div>
  );
}

export default Register;
