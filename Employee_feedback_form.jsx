import React, { useState } from 'react'
import "../Css/style.css"
const Employee_feedback_form = () => {
  const [data, setData] = useState({
    username: "",
    Department: "",
    Rating: ""
  })
  const [records, setRecords] = useState([]);
  const handle_input = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setData({ ...data, [name]: value })
  }

  const handle_submit = (e) => {
    e.preventDefault();
    const newRecord = { ...data, id: new Date().getTime.toString() }
    setRecords([...records, newRecord]);
    console.log(records);

    setData({ username: "", Department: "", Rating: "" })
  }
  return (
    <div className='box_container'>
      <h1>Employee Feedback Form</h1>
      <br></br><br></br><br></br>
      <form action='' onSubmit={handle_submit}>
        <div className='box1'>
          <label htmlFor='username'>Name :</label><br></br>
          <input type="text" className='text1' placeholder='Enter your name' autoComplete='off'
            value={data.username}
            onChange={handle_input}
            name="username" required />
        </div>

        <div className='box2'>
          <label htmlFor='Department'>Department :</label><br></br>
          <input type="text" className='text2' autoComplete='off'
            value={data.Department}
            onChange={handle_input}
            name="Department" placeholder='Enter name of your department' required />
        </div>

        <div className='box3'>
          <label htmlFor='Rating'>Rating :</label><br></br>
          <input type="text" className='text3' autoComplete='off'
            value={data.Rating}
            onChange={handle_input}
            name="Rating" />
        </div>


        <br></br>

        <button type='submit'>SUBMIT</button>

        <hr></hr>
      </form>
      <div className="container">

        {records.map(ele => (<h5 className='text4'>Name:{ele.username} || Department:{ele.Department} || Rating:{ele.Rating}</h5>))}


      </div>

    </div>
  )
}

export default Employee_feedback_form;