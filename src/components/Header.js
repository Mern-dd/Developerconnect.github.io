import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
import MainLayout from './MainLayout';
import Register from './Register';

function Header() {
    return (
        <div className="row" style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>

        
            <h3>Developer Connect</h3>
            <p>Here you will able to connect with the best software developer</p>
          
               
        </div>
        
    )
}

export default Header
