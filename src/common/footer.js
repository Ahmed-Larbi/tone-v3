import React from 'react'

function Footer() {
  return (
    <footer className="bg-light-gray-opacity p-4 text-center">
    <p className='text-white'>&copy; 2024 Tone Design Studio. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://www.facebook.com/share/Akma3GbyXLXZ8vZG/?mibextid=JRoKGi" className="text-white hover:text-yellow-500">Facebook</a>
      <a href="https://www.instagram.com/tonedesignstudio/" className="text-white hover:text-yellow-500">Instagram</a>
      <a href="https://www.linkedin.com/company/tonedesign/" className="text-white hover:text-yellow-500">LinkedIn</a>
    </div>
  </footer>
  )
}

export default Footer;