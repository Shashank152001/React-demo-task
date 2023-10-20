import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    tech: "",
    skill: [],
    password: "",
    check:false
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (input.name === "") {
      alert("Enter the name");
      return;
    } else if (
      !/^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(input.email)
    ) {
      alert("Please enter a valid email");
      return;
    } else if (input.mobile === "") {
      alert("Please enter a valid mobile number");
      return;
    } else if (input.tech === "Open this select menu to select" || input.tech === "") {
      alert("Please select the tech");
      return;
    } else if (input.skill === []) {
      alert("Please select skills");
      return;
    } else if (input.password === "") {
      alert("Please enter password");
      return;
    }else if(input.check===false){
      alert('Please tick the checkbox')
      return ;
    }

    try {
      let localStorageData = JSON.parse(localStorage.getItem("user"));
      if (localStorageData === null) {
        const tempArray = [];
        tempArray.push(input);
        localStorage.setItem("user", JSON.stringify(tempArray));
        navigate("/login");
      } else {
        const emailAlreadyExists = localStorageData.find(
          data => data.email === input.email
        );
        if (emailAlreadyExists) {
          alert("Email Already Exists");
        } else {
          localStorageData.push(input);
          localStorage.setItem("user", JSON.stringify(localStorageData));
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <section id="reg">
        <div className="container mt-3">
          <div className="row ">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="/images/login.webp"
                style={{ width: "100%", height: "450px" }}
                alt="logo"
              />
            </div>
            <div className="col-md-6 pe-5">
              <div className="text-center text-primary">
                <h2>Register Here!</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={input.name}
                    onChange={e =>
                      setInput({ ...input, [e.target.name]: e.target.value })}
                    className="form-control"
                    id="name-input"
                    aria-describedby="name-input-help"
                  />
                  <div id="name-input-help" className="form-text">
                    We'll never share your data with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
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
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={input.mobile}
                    onChange={e =>
                      setInput({ ...input, [e.target.name]: e.target.value })}
                    className="form-control"
                    id="mobile-input"
                    aria-describedby="mobile-input-help"
                  />
                  <div id="mobile-input-help" className="form-text">
                    We'll never share your data with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Tech</label>
                  <select
                    name="tech"
                    id="tech-dropdown"
                    className="form-select"
                    value={input.tech}
                    onChange={e =>
                      setInput({ ...input, [e.target.name]: e.target.value })}
                    aria-describedby="tech-dropdown-help"
                  >
                    <option selected>Open this select menu to select</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="FullStack">FullStack</option>
                  </select>

                  <div id="tech-dropdown-help" className="form-text">
                    We'll never share your data with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Skill</label>
                  <select
                    name="skill"
                    id="skill-select"
                    className="form-select"
                    value={input.skill}
                    onChange={e =>
                      setInput({
                        ...input,
                        [e.target.name]: [...input.skill, e.target.value]
                      })}
                    multiple
                    aria-describedby="skill-select-help"
                  >
                    <option value="Reactjs">Reactjs</option>
                    <option value="Nodejs">Nodejs</option>
                    <option value="Java">Java</option>
                    <option value="Angular">Angular</option>
                    <option value="PHP">PHP</option>
                  </select>

                  <div id="skill-select-help" className="form-text">
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
                    placeholder="Enter your password"
                  />
                </div>
                <div id="password-input-help" className="form-text">
                  We'll never share your data with anyone else.
                </div>
                <div className="mb-3">
                  <input type="checkbox" 
                  name="check" 
                  id="check"
                  value={input.check} 
                  onChange={e =>
                    setInput({ ...input, [e.target.name]: true })}/><span>Agree to Terms and Condition</span>
                </div>
                <button type="submit" className="btn btn-primary form-control">
                  Register
                </button>
                <div className="mt-3">
                  <Link to="/login">Already have an account! Login here!</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
