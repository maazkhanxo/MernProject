import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [project, setproject] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { name, lastName, email, mobile, project };
    axios
      .post("http://localhost:8080/createUser", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "20%" }}>
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

        <button onClick={onSubmit} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
