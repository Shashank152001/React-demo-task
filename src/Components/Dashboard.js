import React from "react";
import { data } from "../data";
import { useState } from "react";
import ReactDOM from "react-dom/client";
function Dashboard() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("no data");
  // const[showdata,setShowdata]=useState(true)
  // const[dupdata,setDupdata]=useState(true)
  // const[nodata,setNodata]=useState(false)

  console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form action="" method="POST" onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                id=""
                placeholder="search data"
                className="mt-2 mb-2 form-control"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="mt-2 table table-hover">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => {
                    // return search.toLowerCase()==='' ? item : item.personal.gender.toLowerCase().includes(search)

                    if (search.toLowerCase() === "") {
                      return item;
                    } else if (
                      search
                        .toLowerCase()
                        .match(item.personal.name.toLowerCase())
                    ) {
                      // alert(item.personal.name)
                      // setShowdata(true)
                      // setNodata(false)
                      return item.personal.name.toLowerCase().includes(search);
                    } else if (
                      search.toLowerCase().match(item.empid.toLowerCase())
                    ) {
                      // alert(item.personal.gender)
                      // setShowdata(true)
                      // setNodata(false)
                      return item.empid.toLowerCase().includes(search);
                    }
                    // else if(search.toLowerCase()===item.personal.age.toLowerCase()){
                    //   alert(item.personal.age)
                    //   return item.personal.age.toLowerCase().includes(search)
                    // }
                    else if (
                      search
                        .toLowerCase()
                        .match(item.personal.address.city.toLowerCase())
                    ) {
                      // alert(item.personal.address.city)
                      // setShowdata(true)
                      // setNodata(false)
                      return item.personal.address.city
                        .toLowerCase()
                        .includes(search);
                    } else if (
                      search
                        .toLowerCase()
                        .match(
                          item.personal.address.streetaddress.toLowerCase()
                        )
                    ) {
                      // alert(item.personal.address.streetaddress)
                      // setShowdata(true)
                      // setNodata(false)
                      return item.personal.address.state
                        .toLowerCase()
                        .includes(search);
                    } else if (
                      search
                        .toLowerCase()
                        .match(item.personal.address.state.toLowerCase())
                    ) {
                      // alert(item.personal.address.state)
                      // setShowdata(true)
                      // setNodata(false)
                      return item.personal.address.state
                        .toLowerCase()
                        .includes(search);
                    } else if (
                      search
                        .toLowerCase()
                        .match(item.profile.designation.toLowerCase())
                    ) {
                      // alert(item.profile.designation)
                      // setShowdata(true)
                      // setNodata(false)
                      return item.profile.designation
                        .toLowerCase()
                        .includes(search);
                    } else if (
                      search
                        .toLowerCase()
                        .match(item.profile.department.toLowerCase())
                    ) {
                      // alert(item.profile.department)
                      // setShowdata(true)
                      // setNodata(false)
                      return item.profile.department
                        .toLowerCase()
                        .includes(search);
                    }
                    //
                    // else{
                    //   const myElement = <h1>No data</h1>;

                    //   const root = ReactDOM.createRoot(document.getElementById('root'));
                    //   root.render(myElement);
                    // }
                  })
                  .map((item) => (
                    <>
                      <tr key={item.empid}>
                        <th>EmpId</th>
                        <td>{item.empid}</td>
                      </tr>
                      <tr key={item.empid}>
                        <th>EmpName</th>
                        <td>{item.personal.name}</td>
                      </tr>
                      <tr key={item.empid}>
                        <th>Age</th>
                        <td>{item.personal.age}</td>
                      </tr>
                      <tr key={item.empid}>
                        <th>Gender</th>
                        <td>{item.personal.gender}</td>
                      </tr>
                      <tr key={item.empid}>
                        <th>
                          Adress
                          <ul>
                            <li>StreetAddress</li>
                            <li>City</li>
                            <li>Postal Code</li>
                            <li>State</li>
                          </ul>
                        </th>
                        <td className="">
                          User Complete Address
                          <ul>
                            <li>{item.personal.address.streetaddress}</li>
                            <li>{item.personal.address.city}</li>
                            <li>{item.personal.address.postalcode}</li>
                            <li>{item.personal.address.state}</li>
                          </ul>
                        </td>
                      </tr>
                      <tr key={item.empid}>
                        <th>
                          Profile
                          <ul>
                            <li>Profile</li>
                            <li>Department</li>
                          </ul>
                        </th>
                        <td>
                          Profile details
                          <ul>
                            <li>{item.profile.designation}</li>
                            <li>{item.profile.department}</li>
                          </ul>
                        </td>
                      </tr>
                    </>
                  ))}
                {message}
              </tbody>
            </table>
            {/* {nodata&&<table className='table table-hover'>
              
                <thead>
                <tr>
                  <th>No Record </th>
                </tr>
                </thead>
                
              </table>} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
