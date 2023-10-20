import React from "react";
import { db } from "../db";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
function Profile() {
  const [users, setUsers] = useState(db);
  const [sorted, setSorted] = useState({ sorted: "empid", reversed: false });
  const [searchUser, setSearchUser] = useState("");

  const sortById = () => {
    setSorted({ sorted: "empid", reversed: !sorted.reversed });
    const userCopy = [...users];
    userCopy.sort((userX, userY) => {
      const fullempidX = `${userX.empid}`;
      const fullempidY = `${userY.empid}`;
      if (sorted.reversed) {
        return fullempidY.localeCompare(fullempidX);
      }
      return fullempidX.localeCompare(fullempidY);
    });
    setUsers(userCopy);
  };

  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const userCopy = [...users];
    userCopy.sort((userX, userY) => {
      const fullNameX = `${userX.personal.name}`;
      const fullNameY = `${userY.personal.name}`;

      if (sorted.reversed) {
        return fullNameY.localeCompare(fullNameX);
      }
      return fullNameX.localeCompare(fullNameY);
    });
    setUsers(userCopy);
  };

  const search = (event) => {
    const matchedUser = db.filter((user) => {
      return (
        `${user.personal.name}`
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        `${user.profile.department}`
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        `${user.empid}`
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        `${user.personal.address.city}`
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        `${user.profile.designation}`
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
    });
    setUsers(matchedUser);
    setSearchUser(event.target.value);
  };

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <tr>
          <td>{user.empid}</td>
          <td>{user.personal.name}</td>
          <td>{user.personal.gender}</td>
          <td>{user.personal.age}</td>
          <td>{user.personal.address.streetaddress}</td>
          <td>{user.personal.address.city}</td>
          <td>{user.personal.address.state}</td>
          <td>{user.personal.address.postalcode}</td>
          <td>{user.profile.designation}</td>
          <td>{user.profile.department}</td>
        </tr>
      );
    });
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control mt-4 mb-5"
            placeholder="Search"
            value={searchUser}
            onChange={search}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-active">
            <thead>
              <tr className="bg-dark text-light">
                <th onClick={sortById}>
                  <span className="me-2">ID</span>
                  {sorted.sorted === "empid" ? renderArrow() : null}
                </th>
                <th onClick={sortByName}>
                  Name{sorted.sorted === "name" ? renderArrow() : null}
                </th>
                <th>
                  <span className="me-2">Gender</span>{" "}
                </th>
                <th>
                  <span className="me-2">Age</span>
                </th>
                <th>
                  <span className="me-2">Street Address</span>{" "}
                </th>
                <th>
                  <span className="me-2">City</span>
                </th>
                <th>
                  <span className="me-2"> State</span>
                </th>
                <th>
                  <span className="me-2">Postal Code</span>
                </th>
                <th>
                  <span className="me-2">Designation</span>
                </th>
                <th>
                  <span className="me-2">Department</span>
                </th>
              </tr>
            </thead>
            <tbody>{renderUsers()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
