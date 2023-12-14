import React from "react";
import TemaCard from "./TemaCard";

const MenuTemas = ({ temas }) => {
  return(
    <div className="menu-temas">
      {temas.map((tema, index) => (
        <TemaCard key={index} nombre={tema.nombre} path={tema.path}/>
      ))}
    </div>
  )
}

export default MenuTemas