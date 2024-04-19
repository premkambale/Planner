import { Routes, Route , redirect , Navigate } from "react-router-dom";

import Header from "../header/Header";
import Sidebar from "./../sidebar/Sidebar";
import Footer from "../footer/Footer";
import "./Main.css";
import Project from "./../../user_components/projects/Project";
import Members from "../../user_components/members/Members";
import AllTasks from "../../user_components/alltasks/AllTasks";

function Main() {
  const token = sessionStorage.getItem("appToken");

  return (
    <section className="mainpage">
      <div className="header-section">
        <Header />
      </div>
      <div className="pagebody">
        <div className="sidebar-section">
          <Sidebar />
        </div>
        <div className="bodycontent">
          {token ?
            <Routes>
              <Route path="/" element={<Navigate to="projects" />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/members" element={<Members />} />
              <Route path="/alltasks" element={<AllTasks />} />
            </Routes>

            :

            redirect('/planner')
          }
        </div>
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </section>
  );
}
export default Main;
