"use client"

import { signIn, signOut, useSession } from 'next-auth/react'

const Appbar = () => {
    const session = useSession()
    console.log(session)

  return (
    <div>
      <div className='flex justify-between'>
        <div>
            Muuzi
        </div>

        <div>
            {session.status === "authenticated" && <button className='m-2 p-2 bg-blue-400 cursor-pointer' onClick={()=>signOut()}>LogOut</button>}
            {session.status === "unauthenticated" && <button className='m-2 p-2 bg-blue-400 cursor-pointer' onClick={()=>signIn()}>LogIn</button>}
        </div>
      </div>
    </div>
  )
}

export default Appbar