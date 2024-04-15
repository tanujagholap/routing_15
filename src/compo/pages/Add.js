import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


function Add() {
  const {register, handleSubmit} = useForm();

  const navi = useNavigate();

  function saveData(data){
    axios.post('http://localhost:5000/users', data)
    navi('/show')
  }


  return (
    <>
      <center>
        <form onSubmit={handleSubmit(saveData)} className='container'>
          <h1>User Registration Form: </h1>
          <label htmlFor='i'>ROLL:</label>
          <input type='number' id='i' {...register('id')} />
          <br/><br/>
          <label htmlFor='n'>NAME:</label>
          <input type='text' id='n' {...register('name')}/>
          <br/><br/>
          <label htmlFor='s'>SALARY:</label>
          <input type='number' id='s' {...register('salary')}/>
          <br/><br/>
          <input type='submit' value='Add User'></input>
          <input type='reset' value='Reset'></input>
        </form>
      </center>
    </>
  )
}

export default Add