import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../helpers/AuthProvider";
function Home() {
  const { logout } = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div>
      <p>passport js</p>
      <p>Welcome to the hood</p>
      <p>{user?.username || "No user please"}</p>
      <Link to="/profile">Check my profile</Link>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Home;
