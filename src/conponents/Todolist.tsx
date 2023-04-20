import React from "react";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: () => void
}

export const Todolist = (props: PropsType) => {
    return <>
        <div>
            {props.title}
        </div>

        <div>
            <input/>
            <button>x</button>
        </div>

        <ul>
            {props.tasks.map((t) => {
                //ToDo ретурним для того, чтобы можно было дебажить
                return <li key={t.id}>
                    <button onClick={()=>{props.removeTask()}}>x</button>
                    <input type={"checkbox"} checked={t.isDone}/>
                    <span>{t.title}</span>
                </li>
            })}
        </ul>

    </>
}