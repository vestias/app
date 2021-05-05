import React from 'react';
import './SearchBar.css';

import { Link } from 'react-router-dom';
import AutosuggestReact from './AutosuggestReact.js';

const types = [
   {
     name: 'Appartements',
     year: 1972
   },
   {
     name: 'locaux commerciaux et autres',
     year: 2000
   },
   {
     name: 'Maisons et Villas'
   },
   {
     name: 'Plateaux Bureaux'
   },
   {
     name: 'Terrains et Fermes'
   }
 ];

 const Categories = [
   {
     name: 'A LOUER'
   },
   {
     name: 'A VENDRE'
   },
   {
     name: 'LOCATION DE VACANCES'
   }
 ];
   


const SearchBar = () => {
  
	
  return (
   <div className="searchBox">
      <h1 class="title5">Trouvez votre logement</h1>
      <div class="search_Container">
         <div class="area1">
            <button class="resetB">réinitialiser</button>
         </div>
         <div class="area2">             
            <Link to="/Decouvert?type=shirt&Categorie=blue">
              <button class="SearchB">Recherche</button>
            </Link>
         </div>
         <div class="area3">
            <form>   
               <input type="text"  className="SearchA" placeholder="Mots clés" />
            </form>
         </div>
         <div class="area4">
            <form>    
            <AutosuggestReact
            placeholder="Categories"
            data={Categories}
         ></AutosuggestReact>
            </form>
         </div>
         <div class="area5">
            <form>    
         <AutosuggestReact
            placeholder="Type"
            data={types}
         ></AutosuggestReact>
            </form>
         </div>
      </div>
   </div>
   );
}
export default SearchBar;