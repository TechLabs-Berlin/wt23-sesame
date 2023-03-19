import React from 'react';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
              borderColor: "white"
            },
            "&:hover fieldset": {
              borderColor: "white",
              borderWidth: 2
            },
            "&.Mui-focused fieldset": {
              borderColor: "white"
            }
        }
      });
      

    return (
        <div>
            <Box sx={{ 
                marginLeft: '24px',
                marginRight: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>  
                
                <Avatar sx={{bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant="h5" sx={{color: 'white'}}>
                Sign in
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    
                    <StyledTextField 
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        name="Email Adress"
                        label="Email Address" 
                        type="email"
                        autoComplete="email"
                        autoFocus                     
                    />

                    <StyledTextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" sx={{color:'white'}} />}
                        label="Remember me"
                        sx={{color: 'white'}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
                
                <div style={{margin: '40px'}}>
                    <Typography variant="body2" color='white' align="center">
                        {'Copyright © '}
                        <Link href="https://mui.com/" color='inherit'>
                            Your Website
                         </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </div>

            </Box>
        </div>
    );


};

export default LogIn
