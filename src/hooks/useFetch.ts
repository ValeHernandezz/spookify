import { useEffect, useState } from "react";

type UseFetchState = {
    state: "idle" | "loading" | "error" | "success";
    data: null ;
    error: null | Error;
}

export default function useFetch(url:string){

    const [fetchState, setFetchState] = useState<UseFetchState>({
        state:"idle",
        data: null,
        error: null
    });
    
    useEffect(()=>{
        
        async function fetchData() {
            try{

                setFetchState((oldValue)=>({
                    ...oldValue,
                    state:"loading"
                }));

                const response = await fetch(url);

                if(response.ok){
                    const json = await response.json();
                    setFetchState({
                        data:json ,
                        state:"success",
                        error: null
                    })
                } else{
                    setFetchState({
                        data:null,
                        state: "error",
                        error: new Error(response.statusText)
                    });
                }

            }catch(error){
                setFetchState({
                    data:null,
                    state: "error",
                    error: error as Error
                });
            }
        }
        fetchData();
    },[url]);

    return fetchState;
}