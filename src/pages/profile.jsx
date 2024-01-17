import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [secretMessage, setSecretMessage] = useState();

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:4000/secret", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setSecretMessage(res.data.msg);
        });
    })();
  }, []);

  return (
    <div>
      <p>profile</p>
      <p>Your user details:</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(user).map((key, index) => (
          <div style={{ display: "inline-flex", gap: 10 }} key={index}>
            <p style={{ color: "yellow" }}>{key}:</p>
            <p>{user[key]}</p>
          </div>
        ))}
      </div>
      <p>Secret message</p>
      <p>{secretMessage}</p>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Profile;
