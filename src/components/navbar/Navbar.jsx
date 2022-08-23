import React from "react";
import Auth from "./Auth";
import Logo from "./Logo";
import Menu from "./Menu";
import { Grid } from "@mui/material";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
        <Grid container>
          <Grid
            item
            xs={3}
            sm={4}
            md={4}
            lg={6}
          >
            <Logo />
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={5}
            lg={4}
          >
            <Menu />
          </Grid>
          <Grid
            item
            xs={3}
            sm={2}
            md={3}
            lg={2}
          >
            <Auth />
          </Grid>
        </Grid>
    </section>
  );
};

export default Navbar;
