import React from 'react'
import { URL } from '../../utils/constants/URL';
import axios from 'axios';
import { useState } from 'react';

const AddTasks = () => {
    const [tasks, setTasks] = useState({
        title: "",
        category: 0,
        priority: 0,
        content: "",
        done: true,
        expiration: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name !== "picture") {
            setTasks({ ...tasks, [name]: value });
        }else{
            setTasks({...tasks , [name]: [{img : value }] })
        }
        console.log(tasks)
      }

      const handleSubmit = async (e) => {
        console.log("Entree handleSubmit")
        e.preventDefault();

        try{
        console.log("Entree try")
        // localStorage.setItem( "user" , JSON.stringify(user));

        const recupToken = localStorage.getItem("user")
        const token = JSON.parse(recupToken).token
        // const tokenSTR = JSON.stringify(token)
        
        console.log(token)
          

            const response = await axios.post( URL.POST_TASKS, tasks , {
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
          <label htmlFor="title">Title</label>
          <input onChange={handleChange} value={tasks.title} type="text" name="title" required/>
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input onChange={handleChange} value={tasks.category} type="text" name="category" required/>
        </div>

        <div>
          <label htmlFor="priority">priority</label>
          <input onChange={handleChange} value={tasks.priority} type="number" name="priority" required/>
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea onChange={handleChange} value={tasks.content} name="content" required></textarea>
        </div>
       
        <div>
          <label htmlFor="expiration">expiration</label>
           <input onChange={handleChange} value={tasks.expiration} type="date" name="expiration" required/>
        </div>
        
        <button type="submit" value="Submit">Créer</button>
        {/* <button type="submit"> Ajouter </button> */}
      </form>
    </div>
    </>
  )
}

export default AddTasks
