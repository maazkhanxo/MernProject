import axios from "axios";
import React, { useState } from "react";

const UpdateModal = ({ user }) => {
  const id = user._id;
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [project, setproject] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const data = { name, lastName, email, mobile, project };
    axios
      .post("http://localhost:8080/updateUser/" + id, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
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
                Modal title
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
                  <label for="exampleInputEmail1" class="form-label">
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
                <button
                  onClick={onSubmit}
                  type="button"
                  class="btn btn-primary"
                >
                  Save changes
                </button>
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
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
