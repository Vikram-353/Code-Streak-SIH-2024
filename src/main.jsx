import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Employees from "./components/Employees/Employees.jsx";
import Contact from "./components/ContactUs/ContactUs.jsx";
import SignIn from "./components/SignIn.jsx";
import WorkingShift from "./pages/WorkingShift";
import LeaveReport from "./pages/LeaveReport";
import Notice from "./pages/Notice.jsx";
import SignUp from "./components/SignUp.jsx";
import SafetyManagementPage from "./pages/SafetyManagementPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="employee" element={<Employees />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="working-shift" element={<WorkingShift />} />
      <Route path="leave-report" element={<LeaveReport />} />
      <Route path="notice" element={<Notice />} />
      <Route path="safety" element={<SafetyManagementPage />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
