import commonApi from "./commonapi"
import { Base_Url } from "./url"



export const getTasks=async()=>{
 return await commonApi("GET",`${Base_Url}/tasks`,"")
}

export const addTasks=async(data)=>{
 return await commonApi("POST",`${Base_Url}/tasks`,data)
}
export const deleteTasks=async(id)=>{
 return await commonApi("DELETE",`${Base_Url}/tasks/${id}`,{})
}
export const updateTask=async(data,id)=>{
 return await commonApi("PUT",`${Base_Url}/tasks/${id}`,data)
}