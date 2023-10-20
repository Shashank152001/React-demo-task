import React from 'react'
var list=[{name:"Sourabh",contact:8504900879,city:"Kota"},{name:"Aryan",contact:8504900879,city:"Kota"},{name:"Divya",contact:8504900879,city:"Kota"},{name:"Shayam",contact:8504900879,city:"Jaipur"}]
function Demo() {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>name</td>
                    <td>contact</td>
                    <td>city</td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item,index)=>(
                        <>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>{item.city}</td>
                        </tr>
                        </>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Demo