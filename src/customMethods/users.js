import Axios from "../api/axios/Axios"

 export const isUser =async (email)=>{
    let users =await Axios.get("/users")
    let fUsers = await users.data
    let user = fUsers?.find(user=>user.email==email)
    return user
  }