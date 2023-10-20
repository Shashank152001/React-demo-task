import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  let username1 = JSON.parse(localStorage.getItem("loggedInUser")).userDetails;
  const handlePassword = (e) => {
    try {
      e.preventDefault();
      let localStorageData = JSON.parse(localStorage.getItem("user"));
      let index = -1;
      for (let i = 0; i < localStorageData.length; i++) {
        if (username1.email === localStorageData[i].email) {
          index = i;
          break;
        }
      }
      if (input.password === username1.password) {
        if (input.newPassword === input.confirmPassword) {
          localStorageData[index].password = input.confirmPassword;
          localStorage.setItem("user", JSON.stringify(localStorageData));
          localStorage.removeItem("loggedInUser");
          // navigate("/");
          alert("password update");
        } else {
          alert("New Password and Confirm Password doesn't match");
        }
      } else {
        alert("Entered password doesn't match the old password");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = (e) => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Welecome {username1.name}</h2>
          <div className="col-md-6">
            <p className="fs-2">Email: {username1.email}</p>
            <p className="fs-2">Mobile:{username1.mobile}</p>
            <p className="fs-2">Tech: {username1.tech}</p>
            <p className="fs-2">Skills: {username1.skill}</p>

            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="col-md-6">
            <form onSubmit={handlePassword}>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={input.newPassword}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-success form-control">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
