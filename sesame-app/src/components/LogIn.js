import React from 'react';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';



function LogIn() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    };

    //Style your textfield here:
    const StyledTextField = styled(TextField)({
        margin: '8px 0px',
        required: true,
        fullWidth: true,
        
        input: {
            color: "white"
          },

        "& label": {
            color: "white"
        },
       
        "& label.Mui-focused": {
            color: "white"
            
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white"
        },
        
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#7A7A7A"
            },
            "&:hover fieldset": {
              borderColor: "#A057FE",
              borderWidth: 2
            },
            "&.Mui-focused fieldset": {
              borderColor: "#A057FE"
            }
        }
    });

     

    return (
        <Box sx={{ 
            marginLeft: '24px',
            marginRight: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>  
                
            <Avatar sx={{width: '24px', height: '24px', bgcolor: '#A057FE', fontSize: '14px', marginTop: '24px' }}>i</Avatar>
            
            <p style={{color: 'white', textAlign: 'center', margin: '8px'}}>
                 You are currently using a guest account. <br></br>
                 Sign up or log in to manage your personal information and settings.
            </p>
               


            <Box component="form" onSubmit={handleSubmit} noValidate display='flex'flexDirection='column' sx={{ mt: '24px'}} >

                    
                <StyledTextField 
                    id="email"
                    name="Email Adress"
                    label="Email Address" 
                    type="email"
                    autoComplete="email"
                    autoFocus                     
                />

                <StyledTextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

                <FormControlLabel
                    control={<Checkbox value="remember" sx={{color:'#A057FE', '&.Mui-checked': {color: 'white',}}} />}
                    label="Remember me"
                    sx={{color: 'white'}}
                />
                
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt:'32px', mb: '16px',
                    borderRadius: 35, 
                    height: 50,
                    width: 311,  
                    background: 'linear-gradient(269.39deg, #A057FE 49.47%, #916BFF 95.75%)',}}>
                    Log in
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" fontSize={12} sx={{ color: 'white', textDecoration: 'none'}} >
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" fontSize={12} sx={{ color: 'white', textDecoration: 'none'}} >
                        {"No account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>

            </Box>
                
            <Box sx={{margin: '40px'}}>
                <Typography variant="body2" color='#7A7A7A' align="center">
                    {'Copyright © '}
                    <Link href="/welcome-splash" color='#7A7A7A'>
                        sesame
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>

        </Box>
        
    );


};

export default LogIn

