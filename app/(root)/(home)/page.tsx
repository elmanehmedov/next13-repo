import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="font-bold text-sky-500 hover:text-red-500"> <UserButton /></div>
    
  )
}

export default Home