import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function Update() {

    const {register, handleSubmit} = useForm({defaultValues:
    async ()=>(await axios.get(`http://localhost:5000/users/${id}`)).data
    });

    const {id} = useParams();

    const navi = useNavigate();

    function saveData(data){
        axios.put(`http://localhost:5000/users/${id}`, data)
        navi('/show')
    }


    return (
        <>
        <center>
            <form onSubmit={handleSubmit(saveData)}>
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
            <input type='submit' value='Update User'></input>
            
            </form>
        </center>
        </>
    )
    }

    export default Update
