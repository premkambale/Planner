import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Sidebar from "./../sidebar/Sidebar";
import Footer from "../footer/Footer";
import './Main.css'
import Project from './../../user_components/projects/Project';
import Members from "../../user_components/members/Members";
import AllTasks from "../../user_components/alltasks/AllTasks";

function Main() {
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
          <Routes>
          <Route path="main/projects" element={<Project />} />
          <Route path="main/members" element={<Members />} />
          <Route path="main/alltasks" element={<AllTasks />} />
          </Routes>
        </div>
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </section>
  );
}
export default Main;
