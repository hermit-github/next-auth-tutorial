import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import options  from '@/app/api/auth/[...nextauth]/options'

const NavBar = async () => {
  const session = await getServerSession(options)
  return (
    <header className='bg-gray-600 text-gray-100'>
        <nav className='flex justify-between items-center w-full px-10 py-4'>
            <div className="">My Site</div>
            <div className="flex gap-10">
                 <Link href="/" style={{textDecoration:"none"}}>Home</Link>
                 <Link href="/AssignRoles" style={{textDecoration:"none"}}>Create User</Link>
                 <Link href="/ClientMember" style={{textDecoration:"none"}}>Client Member</Link>
                 <Link href="/Member" style={{textDecoration:"none"}}>Member</Link>
                 <Link href="/" style={{textDecoration:"none"}}>Public</Link>
                 {session ? (
                  <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
                 ):(
                  <Link href="/api/auth/signin">Login</Link>
                 )}
            </div>
        </nav>
    </header>
  )
}

export default NavBar