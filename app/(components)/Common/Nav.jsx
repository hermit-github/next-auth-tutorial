import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import options  from '@/app/api/auth/[...nextauth]/options'

const NavBar = async () => {
  const session = await getServerSession(options)
  return (
    <header className='bg-gray-600 text-gray-100'>
        <nav className='flex justify-between items-center w-full px-10 py-4'>
            <div className="font-extrabold text-yellow-200 ">Next Auth</div>
            <div className="flex items-center justify-between gap-10">
                 <Link href="/" className='no-underline'>Home</Link>
                 <Link href="/AssignRoles" className='no-underline'>Create User</Link>
                 <Link href="/ClientMember" className='no-underline'>Client Member</Link>
                 <Link href="/Member" className='no-underline'>Member</Link>
                 <Link href="/" className='no-underline'>Public</Link>
                 {session ? (
                  <Link className='p-2 rounded bg-blue-700 no-underline' href="/api/auth/signout?callbackUrl=/">Logout</Link>
                 ):(
                  <Link className='p-2 rounded bg-blue-700 no-underline' href="/api/auth/signin">Login</Link>
                 )}
            </div>
        </nav>
    </header>
  )
}

export default NavBar