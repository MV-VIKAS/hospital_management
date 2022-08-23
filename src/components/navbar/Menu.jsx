import React from 'react'
import styles from "./navbar.module.css";
import { Grid } from "@mui/material";
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <Grid container className={styles.child}>
        <Grid item >
        <Link to="/">HOME</Link>
        </Grid>
        <Grid item >
        <Link to="/">ABOUT US</Link>
        </Grid>
        <Grid item >
        <Link to="/">CONTACT US</Link>
        </Grid>
    </Grid>
  )
}

export default Menu