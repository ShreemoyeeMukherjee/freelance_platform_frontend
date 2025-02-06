import instance from "../axiosinstance.js"
const DeleteTask = (id)=>{
    instance.delete(`/client/delete-task?id=${id}`)
    .then((response)=>{
        console.log(response.data);
        if(response.status === 200)
        {
            alert("Task deleted successfully");
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}
export default DeleteTask;