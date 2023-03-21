//You need to import React at the top of every js file
import logo from '../../assets/sesame-logo.svg';
import './WelcomeSplash.css';
import React, { useState, useEffect } from 'react';
//npm install --save react-spinners run in terminal if it doesn't install automaticaly
import GridLoader from "react-spinners/GridLoader";
//npm install framer-motion  run in terminal if it doesn't install automaticaly
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
function WelcomeSplash() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section animate={{ y: 100 }} className="welcome-splash-container">
      {loading ?

     (<GridLoader size={30} color={'#36d698'} loading={loading} />) : (

      <motion.div className ='logo' animate={{ y: -50, display:'flex',flexDirection :'column', flexWrap:'wrap', justifyContent: 'center'}}> <img src={logo}  alt="Logo"/> 
        <motion.div  animate={{ y: 80, }}>
        <a style={{textDecoration: 'none'}}href="/account"><Button 
               type="submit"
               variant="contained"
               sx={{ mt: 20, mb: 2,      
               borderRadius: 35, 
               height: 50,
               width: 311, 
             // background: 'linear-gradient(269.39deg, #57AEFE 49.47%, #6B71FF 95.75%)', 
               background: 'linear-gradient(269.39deg, #A057FE 49.47%, #916BFF 95.75%)',}}>
               Sign Up / Log In
          </Button></a><br></br>
          <a style={{textDecoration: 'none'}}href="/import-bills"><Button 
               type="submit"
            variant="outlined"
               sx={{mt: 1,
               borderRadius: 35, 
               height: 50,
               width: 311, 
               border: 1,
               color: 'white',

             // background: 'linear-gradient(269.39deg, #57AEFE 49.47%, #6B71FF 95.75%)', 
              //  background: 'linear-gradient(269.39deg, #A057FE 49.47%, #916BFF 95.75%)',
               }}>
               Guest Account
          </Button></a>
         </motion.div>
      </motion.div>)}
      
    </section>

  )
}


export default WelcomeSplash;
