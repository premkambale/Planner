import { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

import { GoProject } from "react-icons/go";
import { IoIosPerson } from "react-icons/io";
import { GoTasklist } from "react-icons/go";


const Sidebar = () => {
  const [toggle, setToggle] = useState(true);

  const handleSidebarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`sidebarwrapper ${toggle ? "sidebarsmall" : "sidebarfull"}`}
    >
      <div className="sidebar">
        <div className="togglebutton">
          <div>
            <button onClick={handleSidebarToggle}>
              {
                toggle ?  <FaChevronRight /> : <FaChevronLeft/> 
              }
            </button>
          </div>
        </div>

        <div className="menulist">
          <div className="menus">
            <ul>
              <Link to="project">
              <li className="menubar">
                <div>
                  <GoProject />
                </div>
                {
                  !toggle &&  <div className="menuname">Project</div>
                }
               
              </li>
              </Link>
              <Link to="members">
              <li className="menubar">
                <div>
                  <IoIosPerson />
                </div>
                {
                  !toggle &&   <div className="menuname">Members</div>
                }
              </li>
              </Link>
              <Link to="alltasks">
              <li className="menubar">
                <div>
                  <GoTasklist />
                </div>
                {
                  !toggle &&   <div className="menuname">All Tasks</div>
                }
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
