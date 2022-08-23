import React,{useState} from 'react'
import styles from "./navbar.module.css";
import Button from '@mui/material/Button';
import Login from '../forms/Login';


const Auth = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.child}>
        {
            show&&<Login show={show} handleClose={handleClose}/ >
        }
    <Button variant="contained" style={{background:"#00A3C8"}} onClick={handleShow}>Login</Button>
    </div>
  )
}

export default Auth