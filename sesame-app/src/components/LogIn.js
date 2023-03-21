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
        <div>
            <Box sx={{ 
                marginLeft: '24px',
                marginRight: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>  
                
                <Avatar sx={{bgcolor: '#A057FE' }}>i</Avatar>

                <Typography sx={{color: 'white', textAlign: 'center'}}>
                   <p>
                     You are currently using a guest account. <br></br>
                     Sign up or log in to manage your personal <br></br>
                     information and settings.
                  </p>
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate display='flex'flexDirection='column'sx={{ mt: 5}} >
                    
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
                        control={<Checkbox value="remember" sx={{color:'#A057FE'}} />}
                        label="Remember me"
                        sx={{color: 'white'}}
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

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" fontSize={12} sx={{ color: '#A057FE', textDecoration: 'none'}} >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" fontSize={12} sx={{ color: '#A057FE', textDecoration: 'none'}} >
                              {"No account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
                
                <div style={{margin: '40px'}}>
                    <Typography variant="body2" color='#7A7A7A' align="center">
                        {'Copyright © '}
                        <Link href="/welcome-splash" color='#7A7A7A'>
                            sesame
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
