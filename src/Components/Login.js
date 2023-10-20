import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleLogin = e => {
    try {
      e.preventDefault();
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      for (let i = 0; i < localStorageData.length; i++) {
        //   console.log(localStorageData[i].email);
        //   console.log(localStorageData[i].password);
        if (
          input.email === localStorageData[i].email &&
          input.password === localStorageData[i].password
        ) {
          localStorage.setItem("loggedInUser", JSON.stringify({
            isLoggedIn: true,
            userDetails: localStorageData[i]
          }));
          navigate("/home");
          return;
          // break;
        }
      }
      alert("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <section id="login">
        <div className="container mt-3">
          <div className="row ">
            <div className="col-md-6 ps-5">
              <div className="text-center text-primary">
                <h2>Login Here!</h2>
              </div>
              <span className="text-danger" />
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={e =>
                      setInput({ ...input, [e.target.name]: e.target.value })}
                    className="form-control"
                    id="email-input"
                    aria-describedby="email-input-help"
                  />
                  <div id="email-input-help" className="form-text">
                    We'll never share your data with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={e =>
                      setInput({ ...input, [e.target.name]: e.target.value })}
                    className="form-control"
                    id="password-input"
                    aria-describedby="password-input-help"
                  />
                  <div id="password-input-help" className="form-text">
                    We'll never share your data with anyone else.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary form-control">
                  Login
                </button>
                <div className="mt-3">
                  <Link to="/">Create a new account here!</Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="/images/login.webp"
                style={{ width: "100%", height: "450px", marginLeft: "50px" }}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
