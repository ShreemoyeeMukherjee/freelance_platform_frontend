const TaskItem = ({task})=>{
    return(
        <div id = "TaskItem">
            <h2>task.name</h2>
            <button id= "TaskItemNameUpdate">Edit</button>
            <h3>task.description</h3>
            <button id = "TaskItemDescriptionUpdate">Edit</button>
            <h3>task.duration_in_hrs</h3>
            <button id = "TaskItemDurationUpdate">Edit</button>
            <h3>task.remuneration</h3>
            <button id = "TaskItemeRemunerationUpdate">Edit</button>

        </div>
    )
}
export default TaskItem;