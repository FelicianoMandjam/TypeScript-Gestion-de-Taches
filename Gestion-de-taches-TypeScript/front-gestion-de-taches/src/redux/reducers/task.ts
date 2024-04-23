import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task , { taskInitialType } from "../../utils/interfaces/taskInterface";
import React from 'react'

const initialState : taskInitialType = {
    data : [] , 
    loading : null, 
    error : false
};

export const Task = createSlice({
    name : "task",
    initialState,
    reducers: {
        FETCH_START:(initialStateDraft:taskInitialType) =>{
            initialStateDraft.loading = true
            console.log("FETCH_START lance")
        },
        FETCH_SUCCES:(initialStateDraft:taskInitialType , actions) =>{
            console.log("FETCH_SUCESS lance")

            initialStateDraft.loading = false ;

            console.log(initialStateDraft.data = actions.payload)

            initialStateDraft.data = actions.payload; 
        },
        FETCH_FAILURE: (initialStateDraft: taskInitialType) => {
            initialStateDraft.loading = false;
            initialStateDraft.error = true;
            console.log("Erreur dans le reducer de FETCH_FAILLURE")
          },
    }
})

export const {FETCH_START , FETCH_SUCCES , FETCH_FAILURE } = Task.actions;

export default Task.reducer;

