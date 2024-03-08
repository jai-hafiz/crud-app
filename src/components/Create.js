import React, { useState } from 'react';
import './Create.css'

function Create() {

  
  const [formData, setFormData] = useState({
    nickname: '',
    status: '',
    age: '',
    salary: ''
  });

  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedData = [...data];
      updatedData[editingIndex] = { ...formData };
      setData(updatedData);
      setEditingIndex(null);
    } else {
      setData([...data, { ...formData }]);
    }
    setFormData({
      nickname: '',
      status: '',
      age: '',
      salary: ''
    });
  };

  const handleEdit = (index) => {
    setFormData({ ...data[index] });
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div>
      <div className='form-container'>
        <h3>Form for POSITIVE <br /> handsome people</h3>
        <form onSubmit={handleSubmit}>
          <label>Nickname <br /></label>
          <input
            placeholder='Enter your nickname'
            name='nickname'
            value={formData.nickname}
            onChange={handleChange}
            required
          />
          <br />

          <label>Status <br /></label>
          <input
            placeholder='Enter your status'
            name='status'
            value={formData.status}
            onChange={handleChange}
            required
          />
          <br />

          <label>Age <br /></label>
          <input
            placeholder='Enter your age'
            name='age'
            value={formData.age}
            onChange={handleChange}
            required
          />
          <br />

          <label>How much money do you have? <br /> (in RM) <br /></label>
          <input
            placeholder='Enter your salary'
            name='salary'
            value={formData.salary}
            onChange={handleChange}
            required
          />
          <br />
          <div>
            <button className='create-btn' type='submit'>CREATE</button>
          </div>
        </form>
      </div>

      <div className='table-container'>
        <div>
          <h3>List of handsome man</h3>
        </div>
        <div className='list-container'>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>STATUS</th>
                <th>AGE</th>
                <th>SALARY</th>
                <th>ED OPERATION</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.nickname}</td>
                      <td>{item.status}</td>
                      <td>{item.age}</td>
                      <td>{item.salary}</td>
                      <td>
                        <button className='list-btn' onClick={() => handleEdit(index)}>EDIT</button>
                        &nbsp;
                        <button className='list-btn' onClick={() => handleDelete(index)}>
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan='5'>Fill the form above</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Create;
