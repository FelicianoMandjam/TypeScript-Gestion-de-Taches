import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import task, * as ACTIONS from "../../redux/reducers/task"
import { URL } from "../../utils/constants/URL";
import { allTask } from "../../utils/services/selector/taskSelector";



const Home = () => {
//   const dispatch = useDispatch(); 

//   useEffect(()=>{

//     dispatch(ACTIONS.FETCH_START())

//  const store = useSelector((state) => allTask(state))


//     const fetchTask = async () => {
//       console.log("Rentre dans le fecthTask() de home.tsx")
//       try {
//       console.log("Rentre dans le try() de home.tsx")

//       const data = await axios.get(URL.GET_TASKS)

//       console.log(data + "DATA AXIOS")

//       dispatch(ACTIONS.FETCH_SUCCES(data))

        
//       } catch (error) {

//         console.log("Entre dans le catch")
//         console.log(error)
//         dispatch(ACTIONS.FETCH_FAILURE())
        
//       }
//     };
//     fetchTask()
//   },[])

  return (
    <>
      <small>Connexion obligatoire</small>
      {localStorage.length > 0 && (
        //Les taches etc
        <div className="tasks">
          <h1>page home t'es connecte</h1>
          <div className="list-task">
            <ul>
              <li>Task</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
