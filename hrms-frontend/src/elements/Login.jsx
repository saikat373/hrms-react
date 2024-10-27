import './css/login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Login = () => {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 mt-4'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4 className='text-center'>Login</h4>
                        </div>
                        <div className='card-body'>
                            <Box sx={{ '& > :not(style)': { m: 1, width: '55ch' } }} component="form">
                                <TextField id='outlined-basic' type='email' label='Email' variant='outlined' />
                                <TextField id='outlined-basic' type='password' label='Password' variant='outlined' />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login