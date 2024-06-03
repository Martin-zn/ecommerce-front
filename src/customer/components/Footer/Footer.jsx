import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:"black", color:"white", py:3}}
        >
            {/* //First Column */}
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>First</Typography>
                <div>
                <Button className='pb-5' variant='h6'>Nosotros</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Trabajo</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Preguntas frecuentes</Button>
                </div>
            </Grid>

            {/* //Second Column */}
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Second</Typography>
                <div>
                <Button className='pb-5' variant='h6'>Nosotros</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Trabajo</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Preguntas frecuentes</Button>
                </div>
            </Grid>
{/* 
            //Third Column */}
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Third</Typography>
                <div>
                <Button className='pb-5' variant='h6'>Nosotros</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Trabajo</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Preguntas frecuentes</Button>
                </div>
            </Grid>

            {/* //Fourth Column */}
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Fourth</Typography>
                <div>
                <Button className='pb-5' variant='h6'>Nosotros</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Trabajo</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'>Preguntas frecuentes</Button>
                </div>
            </Grid>

            {/*   Parte inferior del footer */}
            <Grid className='pt-20' item xs={12}>
                <Typography variant='body2' component={"p"} align='center'>&copy; 2024 My Company. All rights reserved</Typography>
                <Typography variant='body2' component={"p"} align='center'>
                    Made by {' '}
                    <Link href="https://github.com/Martin-zn" color={"inherit"} underline='always'>M.Z.N.</Link>
                </Typography>


            </Grid>

        </Grid>

    </div>
  )
}

export default Footer