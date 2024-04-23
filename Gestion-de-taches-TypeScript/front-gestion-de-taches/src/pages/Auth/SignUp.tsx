import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { URL } from "../../utils/constants/URL"

const SignUp = () => {
    const [user , setUser] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target 
        setUser((user) => ({...user, [name]:value}))
        
    };

    const hundleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log(user)
            const response = await axios.post(URL.USER_SIGNUP , user)
            const flashMessageSucess = response.data.message
            const form = document.querySelector('.formulaire');
            if (form ) {
              form.innerHTML = `${flashMessageSucess}`
            }
            
        }catch(e){
            console.log(e);
        }
      }

  return (
    <div>
      <form  className="formulaire" onSubmit={hundleSubmit}>

        <input onChange={handleChange} type="email" placeholder='email' name="email"/>
        <input onChange={handleChange} type="password" placeholder='password' name="password"/>
        <button type='submit'> S'incrire</button>

      </form>
    </div>
  )
}

export default SignUp
