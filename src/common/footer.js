import React from 'react'

function Footer() {
  return (
    <footer className="bg-light-gray-opacity p-4 text-center">
    <p className='text-white'>&copy; 2024 Tone Design Studio. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="text-white hover:text-yellow-500">Facebook</a>
      <a href="#" className="text-white hover:text-yellow-500">Twitter</a>
      <a href="#" className="text-white hover:text-yellow-500">Instagram</a>
      <a href="#" className="text-white hover:text-yellow-500">LinkedIn</a>
    </div>
  </footer>
  )
}

export default Footer;