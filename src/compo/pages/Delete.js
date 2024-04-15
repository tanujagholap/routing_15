import axios from 'axios';
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {

    const navi = useNavigate();

    const {id} = useParams();

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${id}`)
        navi('/show')
    }

  return (
    <div>
        <center>
            <h1>ARE YOU SURE?</h1>
            <button onClick={()=>deleteUser()}>YSE</button>
            <NavLink to={`/show`}><button>NO</button></NavLink>
        </center>
    </div>
  )
}

export default Delete