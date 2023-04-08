import { ContextGlobal } from '../Components/utils/global.context'
import { NavLink } from "react-router-dom";
import React, { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal)

  const handleChangeTheme = () =>{
    toggleTheme(theme)
  }

  return (
    <nav className={`${theme === "dark" ? "dark" : null}`}>
      <h2>Odonto DH</h2>
      <div>
        <ul className='links'>
          <li>
            <NavLink to='/home'>
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink to='/favs'>
              Favs
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
    {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
  )
}
export default Navbar