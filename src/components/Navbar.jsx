

import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import ShowRegisterPeople from "./ShowRegisterPeople"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"

const Navbar = () => {
  const {user} =useSelector(state=>state.user)
  const[search,setSearch]=useState("")
  const [users,setUsers]=useState()
  const{change}=useSelector(state=>state.change)
 
  
  useEffect(()=>{
    const getAllUsers=async()=>{
      const res=await axios.get(`https://mernsocialmedia-api.onrender.com/api/users?name=${search}`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      })
     setUsers(res.data.user)
    
    }
  getAllUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search,change])

  const token=localStorage.getItem("token")
  const navigate=useNavigate()
  return (
    <div className="bg-white w-full flex 
     shadow rounded md:justify-between md:flex-row flex-col p-2 gap-2 ">
      <div className="flex justify-between  ">
      <Link to={"/profile"} className="flex gap-x-2 items-center">
      {user?.profile?<img src={user?.profile.url} alt=""  className="h-10 w-10 rounded-full cursor-pointer"/>:<img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt=""  className="h-10 rounded-full cursor-pointer"/>}
      <h2>{user?.name}</h2>
      </Link>

      <div className="flex gap-x-3">
      
      </div>
      </div>
 
     <div className="flex md:w-[70%] justify-between">
     <div className="flex items-center justify-center p-1 gap-x-3 rounded-full w-96 bg-gray-100 relative">
        <input type="text"  className="p-2 bg-transparent w-full outline-none" value={search} placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
        <button className="px-2 text-xl"><ion-icon name="search"></ion-icon></button>
        {search.trim() &&<div className="absolute flex flex-col gap-y-4 z-20 top-16 h-fit w-fit p-4 rounded-lg shadow-md bg-white">
        {users == ""&& <h1 className="text-xl">User not found..</h1>}
      {
        users?.map((user,i)=>(
          <ShowRegisterPeople key={i} users={user}  />
        ))
        
      }
        </div>}
      </div>

      <ul className="*:text-2xl flex gap-x-6 *:cursor-pointer items-center">
        <Link to={"/"}><ion-icon name="home"></ion-icon></Link>
        <Link to={"/profile"}><ion-icon name="person-circle"></ion-icon></Link>
        {token?<button className="text-red-400" onClick={()=>{localStorage.removeItem("token")
          toast.success("Logout Succesfully")
          navigate("/login")
        }}><ion-icon name="log-out"></ion-icon></button>:<Link to={"/login"}><ion-icon name="log-in"></ion-icon></Link>}
      </ul>
     </div>
    </div>
  )
}

export default Navbar
