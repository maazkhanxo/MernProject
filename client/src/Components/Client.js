import axios from "axios";
import React, { useState, useEffect } from "react";

const Client = () => {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [project, setproject] = useState("");

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/deleteUser/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updateUser = (id) => {
    const data = { name, lastName, email, mobile, project };
    axios
      .put("http://localhost:8080/updateUser/" + id, data)
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
                  <div>
                    <button
                      style={{ font: "4px" }}
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Edit
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Update
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <h2>Create Clients</h2>

                              <div class="mb-3">
                                <label for="Name" class="form-label">
                                  Name
                                </label>

                                <input
                                  type="text"
                                  class="form-control"
                                  id="Name"
                                  aria-describedby="Name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                              <div class="mb-3">
                                <label for="Name" class="form-label">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Name"
                                  aria-describedby="Name"
                                  onChange={(e) => setlastName(e.target.value)}
                                />
                              </div>
                              <div class="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  onChange={(e) => setemail(e.target.value)}
                                />
                              </div>
                              <div class="mb-3">
                                <label for="Mobile" class="form-label">
                                  Mobile No.
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="Mobile"
                                  onChange={(e) => setmobile(e.target.value)}
                                />
                              </div>
                              <div class="mb-3">
                                <label for="Project" class="form-label">
                                  Project
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Project"
                                  onChange={(e) => setproject(e.target.value)}
                                />
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              onClick={(e) => updateUser(user._id)}
                              class="btn btn-primary"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
