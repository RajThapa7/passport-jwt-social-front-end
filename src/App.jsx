import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../helpers/ProtectedRoutes";
import "./App.css";

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
const Profile = React.lazy(() => import("./pages/profile"));
const Register = React.lazy(() => import("./pages/register"));

function App() {
  return (
    <React.Suspense fallback={<>loading...</>}>
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
