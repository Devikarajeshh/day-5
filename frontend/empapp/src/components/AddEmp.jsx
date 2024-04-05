import { Button, Input, Table, TableHead, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useLinkClickHandler } from 'react-router-dom'


    const AddEmployee = ()=>{
        var [inputs,setinputs]= useState({
        ename:"",
        eage:"",
        eposition:"",
        esalary:""
    })
    const inputHandler = (e) =>{
        const { name , value} = e.target
        setinputs((prevData)=>({...prevData,[name]:value}))
        console.log(inputs)
    }
    const addHandler = () => {
        console.log("button Clicked")
        axios.post("http://localhost:3005/create",inputs)
        .then ((response) => {
            alert (response.data)
        })
        .catch((err) => console.log (err))}
    return(
    <div style={{paddingTop:"80px"}}>
        <TextField
        label='Employee Name'
        variant='outlined'
        name='ename'
        value={inputs.ename}
        onChange={inputHandler}
        />
        <br /><br />
        <TextField 
        label='Employee Age'
        variant='outlined'
        name='eage'
        value={inputs.eage}
        onChange={inputHandler}
        />
        <br /><br />
        <TextField
        label='employee position'
        variant='outlined'
        name='eposition'
        value={inputs.eposition}
        onChange={inputHandler}
        />
        <br /><br />
        <TextField
        label='Employee salary'
        variant='outlined'
        name='esalary'
        value={inputs.esalary}
        onChange={inputHandler}
        />
        <br /><br />
        <Button variant='contained' color='secondary' onClick={addHandler}>submit</Button>
    </div>
  )
}

export default AddEmployee