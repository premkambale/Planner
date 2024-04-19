import { useState, useEffect } from "react";
import './Members.css'

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { GET } from "../../common/httpmethods/HttpMethods";
import { URL } from "../../../constants/api/ApiUrlConstants";

import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Members = () => {
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
    {
      headerName: "SR NO",
      field: "rowIndex",
      resizable: false,
      cellRenderer: (params) => {
        return <span>{params?.value}</span>;
      },
    },
    {
      headerName: "Full Name",
      field: "fullname",
      resizable: false,
      cellRenderer: (params) => {
        return <span>{params?.value}</span>;
      },
    },
    {
      headerName: "Role",
      field: "role",
      resizable: false,
      cellRenderer: (params) => {
        return <span>{params?.value}</span>;
      },
    },
    {
      headerName: "Email ID",
      field: "email",
      resizable: false,
      cellRenderer: (params) => {
        return <span>{params?.value}</span>;
      },
    },
    {
      headerName: "Mobile Number",
      field: "mobileNo",
      resizable: false,
      cellRenderer: (params) => {
        return <span>{params?.value}</span>;
      },
    },
    {
      headerName: "Action",
      field: "_id",
      resizable: false,
      cellRenderer: (param) => {
        return (
          <div>
            <span onClick={() => handleEditMember(param?.value)}>
              {" "}
              <CiEdit />
            </span>
            <span onClick={() => handleDeleteMember(param?.value)}>
              <MdDeleteOutline />
            </span>
          </div>
        );
      },
    },
  ]);

  // ---------------------------------------------------------- CRUD OPS ------------------------------------------------------
  const handleEditMember = (id) => {
    console.log("id to edit ---", id);
  };

  const handleDeleteMember = (id) => {
    console.log("id to delete ---", id);
  };

  // ---------------------------------------------------------- CRUD OPS ------------------------------------------------------

  // ------------------------------------------------ API CALLS --------------------------------------------
  const getAllMembers = async () => {
    try {
      const token = sessionStorage.getItem("appToken");

      const membersRecords = await GET(URL?.getAllMembersRecords, token);

      if (membersRecords?.success) {
        const data = membersRecords?.data;

        const newData = [];
        let obj = {};

        data?.map((item, index) => {
          obj = { ...item, rowIndex: index + 1 };
          newData.push(obj);
        });

        setRowData(newData);
      } else {
        console.log("Failed to fetch the data");
      }
    } catch (err) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  // ------------------------------------------------ API CALLS END --------------------------------------------

  return (
    <div className="members-wrapper">
      <div className="memberstable">
        <div
          className="ag-theme-quartz"
          style={{ height: "50vh", width: "96vw" }}
        >
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </div>
    </div>
  );
};

export default Members;
