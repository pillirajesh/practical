import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

//to convert table data into PDF and Print install NPM Package
// npm install react-to-print

import { useReactToPrint } from "react-to-print";

const UserData = () => {
  const componentPDF = useRef();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getRegisteredData = async () => {
      const response = await fetch(
        "http://localhost:7000/api/registereduserdata"
      );
      const data = await response.json();
      setUserData(data);
    };

    getRegisteredData();
  }, []);

  const generatePdf = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: () => "UserData",
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-2">
          <h6>UserData</h6>
          <div className="d-grid d-md-flex justify-content-md-end mb-3">
            <Link to="/userregistration" className="btn btn-success">
              Add New User
            </Link>
          </div>
          <div ref={componentPDF} style={{ width: "100%" }}>
            <table className="table table-bordered">
              <thead className="bg-danger">
                <tr>
                  <th>Sr.No</th>
                  <th>Name </th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData?.map((eachUser) => (
                  <tr key={eachUser.userid}>
                    <td>{eachUser.userid}</td>
                    <td>{eachUser.name}</td>
                    <td>{eachUser.username}</td>
                    <td>{eachUser.email}</td>
                    <td>{eachUser.phone}</td>
                    <td>{eachUser.gender}</td>

                    <td>
                      <Link
                        to="/userEdit"
                        className="btn btn-success "
                        style={{ marginRight: "10px" }}
                      >
                        Edit
                      </Link>
                      <Link to="/userDelete" className="btn btn-danger">
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-grid d-md-flex justify-content-md-end mb-3 mr-3">
            <button
              type="button"
              className="btn btn-warning"
              onClick={generatePdf}
            >
              PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
