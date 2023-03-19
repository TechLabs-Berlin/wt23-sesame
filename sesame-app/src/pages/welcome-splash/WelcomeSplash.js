//You need to import React at the top of every js file
import logo from '../../assets/sesame-logo.svg';
import './WelcomeSplash.css';
import React, { useState, useEffect } from 'react';
//npm install --save react-spinners run in terminal if it doesn't install automaticaly
import GridLoader from "react-spinners/GridLoader";
//npm install framer-motion  run in terminal if it doesn't install automaticaly
import { motion } from "framer-motion";

function WelcomeSplash() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section animate={{ y: 100 }} className="welcome-splash-container">
      {loading ?

        (<GridLoader size={30} color={'#36d698'} loading={loading} />) : (

        <motion.div animate={{ y: -50 }}> <a href="/SignIn"><img src={logo} alt="Logo" className="logo" /></a> </motion.div>)}
    </section>

  )
}


export default WelcomeSplash;