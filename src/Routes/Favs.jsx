import React, { useState , useContext } from 'react'
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []) ;
  const { theme } = useContext(ContextGlobal)

  const handleDeleteFav = (id) =>{
    const favoritesAct = favorites.filter((element) => element.id !== id)
    localStorage.setItem("favorites", JSON.stringify(favoritesAct))
    setFavorites(favoritesAct)
  }

  return (
    <>
      <h1 className={`${theme === "dark" ? "dark" : null}`}>Dentists Favs</h1>
      <div className={`card-grid ${theme === "dark" ? "dark" : null}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {favorites.map((dentist, index)=>
          
          <Card
            remove={handleDeleteFav}
            key={index}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}     
          />
        )}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      
    </>
    
  );
};

export default Favs;
