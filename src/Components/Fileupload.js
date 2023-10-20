import React from "react";
import {useState} from 'react'
import * as XLSX from "xlsx/xlsx";
import ShowData from './Showdata';

function File() {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState({});
  const [jsonData,setJsonData]=useState({});
  const[CsvUrls,setCsvUrls]=useState([])
  const[urls,setUrls] =useState(null);
  const handleForm = async (e) => {
    e.preventDefault();

    // const CsvUrls = [];
    for (const file of e.target["file"].files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });

        workbook.SheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          jsonData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
          const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
          const blob = new Blob([csvData], { type: 'csv' });
          const url = URL.createObjectURL(blob);
          CsvUrls.push(url);
        });

        setHeaders(Object.keys(jsonData));
        setData(jsonData);
        console.log(jsonData)
        setUrls(CsvUrls);
      };
      reader.readAsBinaryString(file);
    }
  };

  function downloadExcel(){
    const worksheet=[]
    
    // console.log(jsonData[1])
    // setJsonData(jsonData)
    for (let key in jsonData) {
    worksheet.push(XLSX.utils.json_to_sheet(JSON.parse(JSON.stringify(jsonData[key]))));
    
    console.log(worksheet)
    }
    console.log(JSON.parse(JSON.stringify(data)))
    let workbook=XLSX.utils.book_new();
    for(let key in worksheet ){
    XLSX.utils.book_append_sheet(workbook,worksheet[key],"")
    let buff=XLSX.write(workbook,{bookType:"xlsx",type:"buffer"})
    XLSX.write(workbook,{bookType:"xlsx",type:"binary"})
  }
  XLSX.writeFile(workbook,"data.xlsx")
  }

  return (
    <section>
      <div className="container">
        <form id="form" onSubmit={handleForm}>
          <div>
            <label htmlFor="file" className="form-label mt-2 mb-2 fs-4 fw-bold">
              Upload Files:
            </label>
            <input
              type="file"
              className="form-control ms-2 mt-2 mb-3"
              name="file"
              id="file"
              placeholder="Upload Files"
              accept=".csv , .xlxs"
              multiple
              required
            />
          </div>
          <div className="container">
            <button type="submit" className="btn btn-outline-success mt-2 mb-2 ms-3">
              Show Data
            </button>
            <button type="submit" className="btn btn-outline-dark mt-2 mb-2 ms-3" onClick={downloadExcel}>
              Export Data
            </button>
          </div>
        </form>
      </div>

      <ShowData headers={headers} data={data} urls={urls}></ShowData>
    </section>
  );
}

export default File;
