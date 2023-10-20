import React from "react";
// import { generateKey } from './validation';

function ShowData({ headers, data,urls }) {
  return (
    <section className="container">
      {/* {console.log(data)} */}
      {headers
        ? headers.map((info,index) => (
          <>
          <table className="table table-hover">
            <p className="text-primary fs-4 fw-bold">{info}</p>
            <tbody>
              <tr>
                {data
                  ? Object.keys(data[info][0]).map((res) => <th>{res}</th>)
                  : null}
              </tr>
              {data
                ? Object.values(data[info]).map((res) => (
                  <tr>
                    {Object.values(res).map((ele) => (
                      <td>{ele}</td>
                    ))}
                  </tr>
                ))
                : null}
            </tbody>
          </table>
          <button className="btn btn-outline-dark"><a href={urls[index]} download={'data.csv'} className="download_link">
          Download CSV
     </a></button>
     </>
        ))
        : null}
    </section>
  );
}

export default ShowData;
