import React from 'react'

function Navbar() {
    const login = () => {
        // Logic to handle login
        console.log("Login button clicked")
        
    }
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">OneBill</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
      <button onClick={login}> LogIn </button>
    </nav>
  )
}

export default Navbar