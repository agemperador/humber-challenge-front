import { useEffect, useState } from "react"
import axios from "axios"
import { responseMock } from "../mock/mock";

const useFetchData = (url) =>{
    const [data,setData] = useState(null);
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;

    const fetchData = async ()=>{
        try{
            console.log("API_URL "+API_URL);
            const response =axios.get(API_URL, { mode: "cors" })
            if (response.civs_list){
                setData(response.civs_list)
            } else {
                setData(responseMock.civs_list)    
                setError(true)
            }
        } catch(err){
            setData(responseMock.civs_list)
            setError(true)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{    
        fetchData()
    },[])

    return { data, loading, error, fetchData };
}


export default useFetchData;