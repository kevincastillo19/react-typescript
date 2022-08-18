import { API_BASE_URL } from "../constants"
export const getPersonPhoto = async() => {
    let url = ""
    let randomID = Math.floor(Math.random() * 500)
    let query = await fetch(`${API_BASE_URL}/${randomID}/500`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    let status = query.status
    let response = query.url
    if(status < 400){
        url = response
    }else{
        console.error(response)
    }
    return {url:url, id:randomID}
}