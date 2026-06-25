import React, { useEffect, useState } from 'react'

export default function useFetchData(url) {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError] = useState("");

    useEffect (()=>{
        fetchUsers();
    },[])

     const fetchUsers = async ()=>{
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Failed to fetch data");
                
            }
            const result = await response.json();
            if(result.length===0){
                throw new Error("No data found");
                
            }
            setData(result);
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }

     }

  return {data,loading,error }
}
