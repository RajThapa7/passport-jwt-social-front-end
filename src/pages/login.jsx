function Login() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
    </div>
  );
}

export default Login;
