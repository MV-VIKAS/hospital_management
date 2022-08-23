import React from "react";
import logo from "../../assets/images/hospital.png";
import styles from "./navbar.module.css";
import { Grid } from "@mui/material";

const Logo = () => {
  return (
      <Grid container spacing={1} className={styles.child}>
        <Grid item sx={6}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "50px", height: "50px" }}
          />
        </Grid>
        <Grid item sx={6}>
            <h4>Hospital</h4>
            <p>MEDICAL HEALTH</p>
        </Grid>
      </Grid>
    
  );
};

export default Logo;
