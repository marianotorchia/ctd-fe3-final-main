import React from "react";
import { Link, useLocation } from "react-router-dom";

  const Card = ({ name, username, id , deleteDentist}) => {

    const dentistFav = { 
      name: name,
      username: username,
      id: id
    }

    const { pathname } = useLocation();

    const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

      
      if(pathname === '/favs'){
          deleteDentist(id)
          alert("El dentista fue eliminado de tus favoritos")
          return
        }
      
      if(!localStorage.getItem("favorites")){

        const favorites = [dentistFav]

        localStorage.setItem("favorites", JSON.stringify(favorites))

        alert("El dentista se agrego a tus favoritos")
      } 
      else{

        const localStorageFavs = JSON.parse(localStorage.getItem("favorites"))

        const favoriteDentistIndex = localStorageFavs.findIndex((element) => element.id === dentistFav.id)

        if(favoriteDentistIndex >= 0){
          localStorageFavs[favoriteDentistIndex] = dentistFav
          alert("El dentista ya se agrego a tus favoritos")
        }else{
          localStorageFavs.push(dentistFav)
          alert("El dentista se agrego a tus favoritos")
        }
        localStorage.setItem("favorites", JSON.stringify(localStorageFavs))

      }

  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentist/${id}`}>
          <img className="img-doctor" src="./images/doctor.jpg" alt='doctor-img'/>
          <p>Name: {name}</p>
          <p>User: {username}</p>
          <p>ID: {id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{pathname === '/favs' ? "Remove" : "Add Fav ✰"}</button>
        

        
    </div>
  );
};

export default Card;
