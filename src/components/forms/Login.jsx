import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MuiButton from '@mui/material/Button';
import { isUser } from './../../customMethods/users';
import {toast} from "react-toastify"
import {useSlector,useDispatch} from "react-redux"
import {createCurrentUser} from "../../features/user/userSlice"
import {useNavigate} from "react-router-dom"

let initialState = {
  email:"",
  password:""
}
const Login = ({show,handleClose}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
let [user,setUser] = useState({})
const [loginData,setLoginData] = useState(initialState)

const handleChange = (e, name) => {
  setLoginData({ ...loginData, [name]: e.target.value });
};
useEffect(()=>{
  const fetchUser = async()=>{
    let users=await isUser(loginData.email)
    setUser(users)
  }
  fetchUser()
},[loginData.email])

const handleSubmit = async(e)=>{
e.preventDefault();
try {
 if(user==undefined){
  toast.error("Invalid email or user is not registered")
 }else if(user.password!=loginData.password){
  toast.error("wrong password")
 }else{
  dispatch(createCurrentUser({currentUser:user}))
  toast.success("successfully logged in")
  handleClose()
  user.role=="ADMIN"?navigate("/admin"):user.role=="PATIENT"?navigate("/"):user.role=="STAFF"?navigate("/"):toast.error("not authorized")
 }
} catch (error) {
  console.log(error)
}
} 

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title style={{marginLeft:"43%"}}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email or phone</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={loginData.email}
                onChange={e=>handleChange(e,"email")}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={loginData.password}
                onChange={e=>handleChange(e,"password")}
                placeholder="eg:1234"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <MuiButton fullWidth variant="contained" style={{background:"#00A3C8"}} onClick={handleSubmit}>Login</MuiButton>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Login