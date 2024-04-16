import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Sidebar from "./../sidebar/Sidebar";
import Footer from "../footer/Footer";
import './Main.css'

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
            <Route></Route>
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
