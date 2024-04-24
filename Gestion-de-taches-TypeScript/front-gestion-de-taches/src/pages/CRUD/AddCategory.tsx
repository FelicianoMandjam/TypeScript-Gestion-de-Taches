import React from 'react'
import { URL } from '../../utils/constants/URL';
import axios from 'axios';
import { useState } from 'react';

const AddCategory = () => {
     const i = 1
    const [category, setCategory] = useState({
        id : 0 , 
        name : "" , 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name !== "picture") {
            setCategory({ ...category, [name]: value });
        }else{
            setCategory({...category , [name]: [{img : value }] })
        }
        console.log(category)
      }

      const handleSubmit = async (e) => {
        console.log("Entree handleSubmit")
        e.preventDefault();

        try{
        console.log("Entree try de addCategory")
        // localStorage.setItem( "user" , JSON.stringify(user));

        const recupToken = localStorage.getItem("user")
        const token = JSON.parse(recupToken).token
        // const tokenSTR = JSON.stringify(token)
        
        console.log(token)

            const response = await axios.post( URL.POST_CATEGORIES, category , {
              headers: {Authorization: `Bearer ${token}`}
            } )
            console.log(response)
        }catch(e){
            console.log("Erreur dans la requete")
            console.log(e);
        }
      }

  return (
    <>
      <div>
        <h1>Création de Tache</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name da categorie : </label>
          <input onChange={handleChange} value={category.name} type="text" name="name" required/>
        </div>

        <button type="submit" value="Submit">Créer</button>
        {/* <button type="submit"> Ajouter </button> */}
      </form>
    </div>
    </>
  )
}

export default AddCategory
