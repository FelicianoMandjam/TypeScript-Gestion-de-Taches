import React from 'react'
import { URL } from '../../utils/constants/URL';
import axios from 'axios';
import { useState } from 'react';

const AddTasks = () => {
    const [tasks, setTasks] = useState({
        title: "",
        content: "",
        priority: 0,
        category: 0,
        done: true,
        expiration: ""
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
            const response = await axios.post( URL.POST_TASKS, tasks)
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
          <input onChange={handleChange} value={tasks.name} type="text" name="name" required/>
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
        
        <button type="submit" value="Submit">Créer</button>
        {/* <button type="submit"> Ajouter </button> */}
      </form>
    </div>
    </>
  )
}

export default AddTasks
