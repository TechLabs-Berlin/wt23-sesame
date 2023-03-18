import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import'./SignIn.css';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function SignIn({ value, handleChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return ( 
    <ThemeProvider theme={theme} >
      <SesameBottomNavigation value={value} onChange={handleChange} />
      <Container component="main" maxWidth="xs">

        <Box
          sx={{
            padding: 8,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar  sx={{ m: 2, bgcolor: '#A057FE' }}>i</Avatar>
          
          <Typography component="h1" variant="h5">
            <p>
               You are currently using a guest account.
               Sign up or log in to manage your personal
               information and settings.
            </p>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate display='flex'flexDirection='column'sx={{ mt: 5}}>
            <TextField      
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              margin="normal"
              required        
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2,
                    borderRadius: 35, 
                    height: 50,
                    width: 311, 
                    // background: 'linear-gradient(269.39deg, #57AEFE 49.47%, #6B71FF 95.75%)', 
                    background: 'linear-gradient(269.39deg, #A057FE 49.47%, #916BFF 95.75%)',}}
            >
              Log in
            </Button>
            <Grid container >
              <Grid item xs >
                <Link href="#" variant="body2" fontSize={12} sx={{ color: '#A057FE', textDecoration: 'none'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item >
                <Link href="#" variant="body2" fontSize={12} sx={{ color: '#A057FE', textDecoration: 'none'}}>
                  {"No account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    
  );
}
