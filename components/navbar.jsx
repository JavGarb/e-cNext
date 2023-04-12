import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
        <p>Barra de navegacion</p>
        <Link href="/about"> About</Link>
    </div>
  )
}

export default NavBar