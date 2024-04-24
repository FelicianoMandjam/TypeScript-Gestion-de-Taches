interface Task {

    title: string,
    category: number,
    priority: number,
    content: string,
    done: boolean,
    expiration?: Date,
    
}

export type taskInitialType = {
    data: Task[] , 
    loading : (boolean | null ) , 
    error: (boolean) 
}
