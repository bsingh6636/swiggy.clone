import { useEffect, useState } from "react";
import { MenuApi, proxyMenuApi } from "../component/Const";
export const useRestroMenuApi = (resId) => {
  const [apidata, setapidata] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try{
        console.log(`${MenuApi}${resId}`)
        console.log(`${proxyMenuApi}${resId}`)
      const jsone = await fetch(`${MenuApi}${resId}`);
      const data = await jsone.json();
      setapidata(data);
    
      }
      catch(error){
        console.log(`${MenuApi}${resId}`)
        console.log(`${proxyMenuApi}${resId}`)
        console.log('failed to fetch menu api using proxyapi now',error);
        const jsone = await fetch(`${proxyMenuApi}${resId}`);
        const data = await jsone.json();
        setapidata(data);
        console.log(`${proxyMenuApi}${resId}`)
      }
    };
    fetchData();
  }, [resId]);

  return apidata;
};
