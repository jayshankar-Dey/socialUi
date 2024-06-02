/* eslint-disable no-unused-vars */

import {Container} from "@mui/material"
import Navbar from "./Navbar"
import PostShowPage from "./PostShowPage"
import FollowPage from "./FollowPage"
import RequestsShowPage from "./RequestsShowPage"
import { useEffect, useState } from "react"
const Home = () => {
  const[showRequest,setShowRequest]=useState(false)
  const[confirm,setconfirm]=useState(false)
 
  return (
    <div className="w-full h-fit bg-gray-200 ">
<Container  className="p-0 bg-white sm:bg-transparent">
  <Navbar/>
  <div className="md:flex md:gap-x-2 justify-between relative">
  <RequestsShowPage confirm={confirm} setconfirm={()=>setconfirm(!confirm)}/>
  <PostShowPage setShwRequest={()=>setShowRequest(!showRequest)} setconfirm={()=>setconfirm(!confirm)}/>
  <FollowPage  showRequest={showRequest} setShwRequest={()=>setShowRequest(!showRequest)}/>
  </div>
</Container>
    </div>
  )
}

export default Home
