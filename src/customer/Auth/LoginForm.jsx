import React, { useEffect } from 'react'
import { Button, Grid, TextField } from '@mui/material'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action'

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget);

    const userData={
      username:data.get("username"),
      password:data.get("password")
    }
    dispatch(login(userData))
    console.log("user data", userData)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField required id='username' name='username' label="Username" fullWidth autoComplete='given-name'/>
          </Grid>

          <Grid item xs={12}>
            <TextField required id='password' name='password' label="Password" fullWidth autoComplete='password'/>
          </Grid>

          <Grid item xs={12}>
            <Button className='bg-black w-full' type='submit' variant='contained' size='large' sx={{padding:".8rem 0"}}>Ingresar</Button>
          </Grid>

        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>No tienes una cuenta? </p>
          <Button onClick={()=>navigate("/register")} className='mal-5' size='small'>Registrate</Button>
        </div>
      </div>

    </div>
  )
}

export default LoginForm