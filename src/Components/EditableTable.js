import React, { useState } from 'react';

const EditableTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 25, role: 1 },
    { id: 2, name: 'Jane Doe', age: 30, role: 0 },
    // Add more rows as needed
  ]);

  const [editableRow, setEditableRow] = useState(null);
  const [bulkEdit, setBulkEdit] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editedData, setEditedData] = useState({}); // New state to store edited data

  const handleEdit = (id) => {
    setEditableRow(id);
    const rowToEdit = data.find((row) => row.id === id);
    setEditedData({ ...editedData, [id]: { ...rowToEdit } });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const handleSave = () => {
    setEditableRow(null);
    setBulkEdit(false);
    // You can handle saving changes to the backend or update the state as needed
    console.log('Edited Data:', editedData);
    setEditedData({}); // Reset edited data after saving
  };

  const handleCancel = () => {
    setEditableRow(null);
    setBulkEdit(false);
    setEditedData({}); // Reset edited data on cancel
  };

  const handleBulkEdit = () => {
    setBulkEdit(true);
    setEditedData(Object.fromEntries(data.map((row) => [row.id, { ...row }])));
  };

  const handleRoleToggle = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, role: row.role === 1 ? 0 : 1 } : row
    );
    setData(updatedData);
  };

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setData(updatedData);

    if (bulkEdit && editedData.hasOwnProperty(id)) {
      setEditedData((prevEditedData) => ({
        ...prevEditedData,
        [id]: { ...prevEditedData[id], [field]: value },
      }));
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((row) => {
    const roleString = row.role === 1 ? 'Active' : 'Inactive';
  
    return (
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(row.age).includes(searchQuery) ||
      roleString.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      {bulkEdit ? (
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleBulkEdit}>Bulk Edit</button>
      )}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredData.length === 0 ? (
        <p>No records found</p>
      ) : (
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>
              {!bulkEdit && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td>
                  {bulkEdit || editableRow === row.id ? (
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) => handleInputChange(row.id, 'name', e.target.value)}
                    />
                  ) : (
                    row.name
                  )}
                </td>
                <td>
                  {bulkEdit || editableRow === row.id ? (
                    <input
                      type="number"
                      value={row.age}
                      onChange={(e) => handleInputChange(row.id, 'age', e.target.value)}
                    />
                  ) : (
                    row.age
                  )}
                </td>
                <td>
                  {bulkEdit || editableRow === row.id ? (
                    <select
                      value={row.role}
                      onChange={(e) => handleInputChange(row.id, 'role', e.target.value)}
                    >
                      <option value={1}>Active</option>
                      <option value={0}>Inactive</option>
                    </select>
                  ) : (
                    <label>
                      <input type="checkbox" checked={row.role === 1} readOnly />
                      {row.role === 1 ? 'Active' : 'Inactive'}
                    </label>
                  )}
                </td>
                {!bulkEdit && (
                  <td>
                    {editableRow === row.id ? (
                      <>
                        <button onClick={() => handleSave(row.id)}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(row.id)}>Edit</button>
                        <button onClick={() => handleDelete(row.id)}>Delete</button>
                      </>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EditableTable;
