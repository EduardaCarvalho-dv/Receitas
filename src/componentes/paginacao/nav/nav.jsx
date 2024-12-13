import React from "react";
import { Link } from "react-router-dom";
import navStyle from "./../nav/nav.module.css";

export default function nav() {
return (
  <div className= {navStyle.nav_organizar}>
      <div className={navStyle.logo}>
        <a href="#"><span> Nome pensar </span></a>
      </div>

        <div className={navStyle.search_bar}>
          <input type="text" placeholder="Pesquisar" />
          <button type="button"> 🔍 </button>
        </div>
        
        <ul>
            <li><Link to= "/"> Home </Link></li>
            <li><Link to= "/"> Receitas </Link></li>
            <li><Link to= "/"> Sobre </Link></li>
            <li><Link to= "/"> Contato </Link></li>
        </ul>


    </div>
  );
}
