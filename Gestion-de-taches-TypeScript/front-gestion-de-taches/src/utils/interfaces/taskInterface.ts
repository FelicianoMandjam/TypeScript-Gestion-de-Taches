interface Task {
    title: string,
    content: string,
    priority: number,
    category: number,
    done: boolean,
    
}

export type taskInitialType = {
    data: Task[] , 
    loading : (boolean | null ) , 
    error: (boolean) 
}