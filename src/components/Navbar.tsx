import { useState } from 'react'
import logo from '../assets/logo.png'
import '../App.css'
import '../index.css'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />

      <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">Menu</li>
        <li className="nav-item">Alamat</li>

        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="Dropdown-nav-button"
          >
            Kontak
          </button>
          {dropdownOpen && (
            <ul className="Dropdown-nav-item">
              <li className="Dropdown-nav-item">WhatsApp</li>
              <li className="Dropdown-nav-item">Gojek</li>
              <li className="Dropdown-nav-item">Grab</li>
              <li className="Dropdown-nav-item">Shopee</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
