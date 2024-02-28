import axios from "axios";
import React, { useState, useEffect } from "react";
import UpdateModal from "./UpdateModal";

const Client = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/deleteUser/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, [users]);

  return (
    <div style={{ width: "50%" }}>
      <h2>Clients</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Project</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.project}</td>
                <td style={{ padding: "3px", margin: "3px" }}>
                  {/* <UpdateModal user={user} /> */}
                  <button
                    onClick={(e) => handleDelete(user._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Client;
