import { useEffect, useState } from "react";
import { MenuApi, proxyMenuApi } from "../component/Const";
export const useRestroMenuApi = (resId) => {
  const [apidata, setapidata] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try{
      const jsone = await fetch(`${MenuApi}${resId}`);
      const data = await jsone.json();
      setapidata(data);
      }
      catch(error){
        console.log('failed to fetch menu api using proxyapi now',error);
        const jsone = await fetch(`${proxyMenuApi}${resId}`);
        const data = await jsone.json();
        setapidata(data);
      }
    };
    fetchData();
  }, [resId]);

  return apidata;
};
